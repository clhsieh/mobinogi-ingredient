// 料理經驗規劃：計算「受限食材」限制下，能拿到的最大總經驗值與製作組合。
//
// 【進度】這個檔案的核心邏輯已經寫好並用 Node.js 驗證過正確性（小型合成案例、
// 真實 data.js 的受限/不受限分類），但還沒接上 index.html/app.js/style.css 的
// UI（完全沒有第三個分頁、輸入表、localStorage 讀寫）。目前卡在效能：29 道受限
// 料理、中等上限（10~25）時，分支界限要 10~30 秒還沒收斂（truncated），對
// 「輸入變動就重算」的互動式 UI 太慢。下一步：(1) 先測「使用者只填幾道料理」
// 這種更真實的情境是否已經夠快，(2) 如果還是太慢，`boundRemaining`（目前用
// 代理鬆弛 surrogate relaxation 做上界）應該換成真正的 LP relaxation（標準
// 單純形法，因為所有限制式都是 <=、右手邊 >=0，從全 0 解＋slack 基底就能跑，
// 不需要 Phase 1/Big-M），上界會緊很多，剪枝效果應該會好非常多。完整討論見
// plan 檔（若同一台機器：C:\Users\hsieh\.claude\plans\woolly-coalescing-sunbeam.md）。
//
// 這個檔案只做純邏輯計算，不碰 DOM，方便直接用 node 測試（見開發時的手算驗證）。
// 依賴 app.js 定義的全域 ITEM_LIST / ITEMS / isCraftable / getActiveRecipe——
// 因為這些函式只在使用者互動時才會被呼叫（不是載入當下就執行），所以
// <script> 順序只要保證 app.js 在 planner.js 之後載入完成、且使用者觸發計算前
// 已經跑過 init()，就不會有先後順序問題。

// 每週有購買上限、需要被規劃的食材（其餘食材視為無限量）。
const CAPPED_INGREDIENT_IDS = ["胡椒", "糖", "鹽", "高麗菜", "番茄", "蘆筍", "食用油"];

// 建立「受限料理」子圖：哪些食物分類的料理會直接或間接用到受限食材、
// 中間會經過哪些可製作的中間材料，以及這個子圖裡每個節點的直接材料清單
// （只保留會通往受限食材的部分，其餘材料略過）。
function buildRestrictedGraph(cappedIds) {
  const cappedSet = new Set(cappedIds);
  const reachesMemo = new Map();
  const visiting = new Set();

  // 這個物品的配方（遞迴展開）裡，是否會用到任何一種受限食材。
  function reachesCapped(id) {
    if (cappedSet.has(id)) return true;
    if (reachesMemo.has(id)) return reachesMemo.get(id);
    const item = ITEMS[id];
    if (!item || !isCraftable(item)) {
      reachesMemo.set(id, false);
      return false;
    }
    if (visiting.has(id)) return false; // 循環引用時保守當作「不會用到」，避免無窮遞迴
    visiting.add(id);
    const recipe = getActiveRecipe(item);
    let result = false;
    for (const m of recipe.materials) {
      if (reachesCapped(m.id)) {
        result = true;
        break;
      }
    }
    visiting.delete(id);
    reachesMemo.set(id, result);
    return result;
  }

  const restrictedIds = [];
  const unrestrictedIds = [];
  for (const item of ITEM_LIST) {
    if (item.category !== "食物") continue;
    if (reachesCapped(item.id)) restrictedIds.push(item.id);
    else unrestrictedIds.push(item.id);
  }

  // reachesMemo 裡除了料理本身，也會記錄沿途走過、且真的會通往受限食材的
  // 中間材料（例如美乃滋、起司）——這些就是子圖裡除了料理以外的節點。
  const relevantIntermediateIds = [...reachesMemo.keys()].filter(
    (id) => reachesMemo.get(id) && ITEMS[id].category !== "食物"
  );

  const dishSet = new Set(restrictedIds);
  const relevantSet = new Set([...restrictedIds, ...relevantIntermediateIds]);

  // 每個相關節點（料理或中間材料）的直接材料清單，只保留受限食材或其他相關節點。
  const edges = new Map();
  for (const id of relevantSet) {
    const recipe = getActiveRecipe(ITEMS[id]);
    const list = [];
    for (const m of recipe.materials) {
      if (cappedSet.has(m.id) || relevantSet.has(m.id)) list.push({ targetId: m.id, qty: m.qty });
    }
    edges.set(id, list);
  }

  const outputQtyOf = (id) => getActiveRecipe(ITEMS[id]).outputQty || 1;

  // 拓樸排序（父層先、中間材料後），只走子圖裡的邊；供批次展開用。
  function topoOrderRelevant(rootIds) {
    const visited = new Set();
    const inStack = new Set();
    const postorder = [];
    function dfs(id) {
      if (visited.has(id)) return;
      if (inStack.has(id)) return; // 循環引用時停止，不阻斷整體計算
      inStack.add(id);
      for (const edge of edges.get(id) || []) {
        if (!cappedSet.has(edge.targetId)) dfs(edge.targetId);
      }
      inStack.delete(id);
      visited.add(id);
      postorder.push(id);
    }
    for (const id of rootIds) dfs(id);
    return postorder.reverse();
  }

  const order = topoOrderRelevant(restrictedIds);

  return {
    cappedIds: [...cappedIds],
    cappedSet,
    restrictedIds,
    unrestrictedIds,
    relevantIntermediateIds,
    dishSet,
    relevantSet,
    edges,
    outputQtyOf,
    order,
  };
}

// 給定每道受限料理實際製作的次數（Map<dishId, qty>），精確算出：
// 每個相關節點實際製作次數（含中間材料的批次無條件進位）、
// 每種受限食材實際用量，以及總經驗值。這是唯一「真的算對批次進位」的地方，
// 分支界限搜尋時只在葉節點用這個函式驗證是否真的可行。
function evaluateExact(graph, expByDishId, fixedDishActions) {
  const demand = new Map();
  for (const id of graph.order) demand.set(id, 0);
  for (const [id, qty] of fixedDishActions) {
    if (qty > 0) demand.set(id, (demand.get(id) || 0) + qty);
  }

  const actions = new Map();
  const usage = new Map(graph.cappedIds.map((id) => [id, 0]));
  let exp = 0;

  for (const id of graph.order) {
    const isDish = graph.dishSet.has(id);
    const act = isDish ? demand.get(id) || 0 : Math.ceil((demand.get(id) || 0) / graph.outputQtyOf(id));
    actions.set(id, act);
    if (isDish) exp += act * (expByDishId[id] || 0);
    for (const edge of graph.edges.get(id) || []) {
      if (graph.cappedSet.has(edge.targetId)) {
        usage.set(edge.targetId, usage.get(edge.targetId) + edge.qty * act);
      } else {
        demand.set(edge.targetId, (demand.get(edge.targetId) || 0) + edge.qty * act);
      }
    }
  }

  return { actions, usage, exp };
}

// 分支界限搜尋：找出「這週各受限食材購買上限」下，能拿到的最大總經驗值與製作組合。
//
// 搜尋過程中的容量扣除用「線性估計」（忽略中間材料批次進位造成的浪費，
// 當作可以無條件分配），這一定會比真實可行量更樂觀，所以拿來當作
// 剪枝用的上界／候選搜尋範圍是安全的（絕不會因此漏掉真正的最佳解）；
// 每一組完整方案最後都會用 evaluateExact 重新精確驗證，不可行的直接捨棄。
function solveMaxExp(graph, capsById, expByDishId, nodeBudget) {
  const dishes = graph.restrictedIds.filter((id) => (expByDishId[id] || 0) > 0);

  const emptyActions = new Map(graph.restrictedIds.map((id) => [id, 0]));
  if (dishes.length === 0) {
    return { maxExp: 0, actions: emptyActions, usage: new Map(graph.cappedIds.map((id) => [id, 0])), truncated: false };
  }

  const rateMemo = new Map(); // key: id + "|" + cappedId
  function linearRate(id, cappedId) {
    const key = id + "|" + cappedId;
    if (rateMemo.has(key)) return rateMemo.get(key);
    let total = 0;
    for (const edge of graph.edges.get(id) || []) {
      if (edge.targetId === cappedId) {
        total += edge.qty;
      } else if (graph.relevantSet.has(edge.targetId) && !graph.dishSet.has(edge.targetId)) {
        total += (edge.qty / graph.outputQtyOf(edge.targetId)) * linearRate(edge.targetId, cappedId);
      }
    }
    rateMemo.set(key, total);
    return total;
  }

  function bestRatioAmong(ids, cappedId) {
    let best = 0;
    for (const id of ids) {
      const rate = linearRate(id, cappedId);
      if (rate > 0) best = Math.max(best, (expByDishId[id] || 0) / rate);
    }
    return best;
  }

  // 搜尋順序：先試「單一食材效率」最好的料理，通常能更快找到不錯的解，剪枝效果較好。
  const order = [...dishes].sort((a, b) => {
    const ra = Math.max(...graph.cappedIds.map((r) => bestRatioAmong([a], r)));
    const rb = Math.max(...graph.cappedIds.map((r) => bestRatioAmong([b], r)));
    return rb - ra;
  });

  // 用「代理鬆弛」（surrogate relaxation）算還沒決定的料理最多還能拿到多少經驗值：
  // 把 7 種食材的限制式各自除以剩餘容量後加總成一條限制（Σ_r usage_r/cap_r ≤ 資源種數），
  // 這一定是原本限制式的合法弱化，所以它的分數背包上界一定 ≥ 真正可行的上界，可以安全剪枝。
  // （不能只用「單一食材各自算一次、取最小值」——如果剩下的料理裡，各道料理各自只吃
  // 不同的食材，會讓每種食材都被某道「不吃它」的料理拉成 0，整體上界就會被錯誤地壓成 0。）
  function boundRemaining(idx, remainingCap) {
    const rest = order.slice(idx);
    if (rest.length === 0) return 0;
    const activeCappedIds = graph.cappedIds.filter((r) => remainingCap.get(r) > 0);
    if (activeCappedIds.length === 0) return 0;

    const candidates = rest
      .map((id) => {
        const weight = activeCappedIds.reduce((sum, r) => sum + linearRate(id, r) / remainingCap.get(r), 0);
        return { exp: expByDishId[id] || 0, weight };
      })
      .filter((c) => c.weight > 0) // weight=0 代表這道料理在目前還有容量的食材裡完全用不到，
      // 它已經被自己用到、但容量已見底的那種食材鎖死在 0（見 maxQ 的計算），不會貢獻經驗值
      .sort((a, b) => b.exp / b.weight - a.exp / a.weight);

    let capacity = activeCappedIds.length;
    let bound = 0;
    for (const c of candidates) {
      if (capacity <= 0) break;
      const take = capacity / c.weight; // 分數背包鬆弛，允許取小數
      bound += c.exp * take;
      capacity -= c.weight * take;
    }
    return bound;
  }

  function maxFeasibleQty(dishId, remainingCap) {
    let maxQ = Infinity;
    for (const r of graph.cappedIds) {
      const rate = linearRate(dishId, r);
      if (rate > 0) maxQ = Math.min(maxQ, Math.floor(Math.max(0, remainingCap.get(r)) / rate));
    }
    return Number.isFinite(maxQ) ? Math.max(0, maxQ) : 0;
  }

  function deduct(remainingCap, dishId, q) {
    const next = new Map(remainingCap);
    for (const r of graph.cappedIds) {
      const rate = linearRate(dishId, r);
      if (rate > 0) next.set(r, remainingCap.get(r) - q * rate);
    }
    return next;
  }

  let bestExp = 0;
  let bestActions = new Map(order.map((id) => [id, 0]));
  let nodeCount = 0;
  let truncated = false;

  function finalizeLeaf(fixed) {
    const result = evaluateExact(graph, expByDishId, fixed);
    const feasible = graph.cappedIds.every((r) => result.usage.get(r) <= (capsById[r] || 0));
    if (feasible && result.exp > bestExp) {
      bestExp = result.exp;
      bestActions = new Map(fixed);
    }
  }

  function afterDish(idx, remainingCap, fixed, expSoFar) {
    if (idx === order.length) {
      finalizeLeaf(fixed);
      return;
    }
    if (expSoFar + boundRemaining(idx, remainingCap) <= bestExp) return; // 剪枝：這條路線不可能超過目前最佳解
    const dishId = order[idx];
    decideDish(idx, remainingCap, fixed, expSoFar, 0, maxFeasibleQty(dishId, remainingCap));
  }

  // 用二分法決定 order[idx] 這道料理要做幾次，而不是逐一列舉每個整數：
  // 對範圍 [lo, hi]，用「這道料理最多取 hi、其餘容量留給後面（用最樂觀的 lo 扣法）」
  // 算出這整個範圍能不能贏過目前最佳解，贏不過就直接整段跳過；範圍縮到剩一個值才真正決定。
  function decideDish(idx, remainingCap, fixed, expSoFar, lo, hi) {
    nodeCount++;
    if (nodeCount > nodeBudget) {
      truncated = true;
      return;
    }
    if (lo > hi) return;
    const dishId = order[idx];
    const dishExp = expByDishId[dishId] || 0;
    const optimisticRemaining = deduct(remainingCap, dishId, lo);
    const rangeBound = expSoFar + hi * dishExp + boundRemaining(idx + 1, optimisticRemaining);
    if (rangeBound <= bestExp) return;

    if (lo === hi) {
      const q = lo;
      const newRemaining = deduct(remainingCap, dishId, q);
      const newFixed = new Map(fixed);
      newFixed.set(dishId, q);
      afterDish(idx + 1, newRemaining, newFixed, expSoFar + q * dishExp);
      return;
    }

    const mid = lo + Math.floor((hi - lo) / 2);
    // 高的那一半先找，通常能更快找到好解，讓另一半的剪枝更有效。
    decideDish(idx, remainingCap, fixed, expSoFar, mid + 1, hi);
    if (truncated) return;
    decideDish(idx, remainingCap, fixed, expSoFar, lo, mid);
  }

  afterDish(0, new Map(graph.cappedIds.map((id) => [id, capsById[id] || 0])), new Map(), 0);

  const finalEval = evaluateExact(graph, expByDishId, bestActions);
  return { maxExp: finalEval.exp, actions: finalEval.actions, usage: finalEval.usage, truncated };
}

// 主要入口：給定每道料理的經驗值、每種受限食材的每週購買上限，回傳規劃結果。
function planCookingExp(expByDishId, capsById) {
  const graph = buildRestrictedGraph(CAPPED_INGREDIENT_IDS);
  const result = solveMaxExp(graph, capsById, expByDishId, 2000000);
  return { graph, result };
}
