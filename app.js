// 瑪奇 MOBILE 製作計算機
// 讀取 data.js 的 ITEM_LIST，建立索引、計算配方展開與總材料/總時間。
//
// 資料格式（見 data.js 開頭註解）：
// - 原始材料：{ id, name, category, subcategory? }（沒有 recipes）
// - 可製作物：{ id, name, category, subcategory?, recipes: [ { craftTime, outputQty, materials }, ... ] }
//   同一個物品可以有多筆 recipes，代表有多種製作方式（例如用不同材料都能做出同一種錠）。

// 允許 craftTime 直接寫「1小時40分」這種格式，載入時統一轉換成秒數。
function parseDuration(value) {
  if (value === undefined || value === null || value === "") return 0;
  if (typeof value === "number") return value;
  const str = String(value).trim();
  if (/^\d+(\.\d+)?$/.test(str)) return Number(str);

  const hourMatch = str.match(/(\d+(?:\.\d+)?)\s*(?:小時|時|hr|h)/i);
  const minMatch = str.match(/(\d+(?:\.\d+)?)\s*(?:分鐘|分|min|m)/i);
  const secMatch = str.match(/(\d+(?:\.\d+)?)\s*(?:秒|sec|s)/i);

  let total = 0;
  let matched = false;
  if (hourMatch) { total += parseFloat(hourMatch[1]) * 3600; matched = true; }
  if (minMatch) { total += parseFloat(minMatch[1]) * 60; matched = true; }
  if (secMatch) { total += parseFloat(secMatch[1]); matched = true; }
  return matched ? total : NaN;
}

for (const item of ITEM_LIST) {
  for (const recipe of item.recipes || []) {
    const parsed = parseDuration(recipe.craftTime);
    if (Number.isNaN(parsed)) {
      console.warn(`看不懂 ${item.name} 其中一筆配方的 craftTime 格式：${recipe.craftTime}，已當作 0 秒處理`);
      recipe.craftTime = 0;
    } else {
      recipe.craftTime = parsed;
    }
  }
}

const ITEMS = Object.fromEntries(ITEM_LIST.map((item) => [item.id, item]));

// 配方裡引用到、但沒有自己資料列的材料，自動視為「直接採集」的原始材料。
(function autoDetectRawMaterials() {
  for (const item of ITEM_LIST) {
    for (const recipe of item.recipes || []) {
      for (const m of recipe.materials) {
        if (!ITEMS[m.id]) {
          const raw = { id: m.id, name: m.id, category: "原料" };
          ITEMS[m.id] = raw;
          ITEM_LIST.push(raw);
        }
      }
    }
  }
})();

// 反查索引：materialId -> 用到它的每一筆配方 { userId, recipeIndex, qty, recipe }
// 用來做「這個材料可以做出什麼」的反向搜尋，跟目前選的配方無關（掃描所有配方）。
const USAGE_INDEX = new Map();
for (const item of ITEM_LIST) {
  (item.recipes || []).forEach((recipe, recipeIndex) => {
    for (const m of recipe.materials) {
      if (!USAGE_INDEX.has(m.id)) USAGE_INDEX.set(m.id, []);
      USAGE_INDEX.get(m.id).push({ userId: item.id, recipeIndex, qty: m.qty, recipe });
    }
  });
}

// 預設開啟：data.js 裡的 craftTime 本來就是已經有奇幻生活會員（-50%）折扣後的時間，
// 取消勾選才會 ×2 還原成沒有會員的一般時間。
function loadPremium() {
  try {
    const v = localStorage.getItem("mobinogi_premium");
    if (v === null) return true;
    return v === "1";
  } catch {
    return true;
  }
}

function loadRecipeChoices() {
  try {
    const raw = localStorage.getItem("mobinogi_recipe_choice");
    if (!raw) return new Map();
    return new Map(Object.entries(JSON.parse(raw)).map(([k, v]) => [k, Number(v)]));
  } catch {
    return new Map();
  }
}

function saveRecipeChoices() {
  try {
    localStorage.setItem("mobinogi_recipe_choice", JSON.stringify(Object.fromEntries(state.recipeChoice)));
  } catch {
    // 私密瀏覽模式等情況下可能無法寫入，忽略即可
  }
}

const state = {
  mode: "forward", // "forward" = 選成品展開配方；"reverse" = 選材料查用途
  selectedId: null,
  qty: 1,
  search: "",
  category: "全部",
  subcategory: "全部",
  premium: loadPremium(),
  recipeChoice: loadRecipeChoices(), // Map<itemId, recipeIndex>
};

function isCraftable(item) {
  return Array.isArray(item.recipes) && item.recipes.length > 0;
}

function getActiveRecipeIndex(item) {
  const idx = state.recipeChoice.get(item.id);
  return idx !== undefined && idx >= 0 && idx < item.recipes.length ? idx : 0;
}

function getActiveRecipe(item) {
  return item.recipes[getActiveRecipeIndex(item)];
}

// data.js 裡的 craftTime 是已經有奇幻生活會員折扣的時間；
// 沒有會員的話，實際時間要 ×2（製作次數不受影響）。
function getEffectiveCraftTime(recipe) {
  return recipe.craftTime * (state.premium ? 1 : 2);
}

const el = {
  premiumToggle: document.getElementById("premium-toggle"),
  changelogToggle: document.getElementById("changelog-toggle"),
  changelogPanel: document.getElementById("changelog-panel"),
  changelogList: document.getElementById("changelog-list"),
  modeTabs: document.getElementById("mode-tabs"),
  categoryTabs: document.getElementById("category-tabs"),
  subcategoryTabs: document.getElementById("subcategory-tabs"),
  itemList: document.getElementById("item-list"),
  searchInput: document.getElementById("search-input"),
  detailEmpty: document.getElementById("detail-empty"),
  detailContent: document.getElementById("detail-content"),
  detailTitle: document.getElementById("detail-title"),
  qtyControl: document.getElementById("qty-control"),
  qtyInput: document.getElementById("qty-input"),
  qtyDecrease: document.getElementById("qty-decrease"),
  qtyIncrease: document.getElementById("qty-increase"),
  forwardView: document.getElementById("forward-view"),
  totalTime: document.getElementById("total-time"),
  totalActions: document.getElementById("total-actions"),
  materialsTableBody: document.querySelector("#materials-table tbody"),
  craftStepsList: document.getElementById("craft-steps"),
  tree: document.getElementById("tree"),
  recipeChoices: document.getElementById("recipe-choices"),
  reverseView: document.getElementById("reverse-view"),
  reverseDirectCount: document.getElementById("reverse-direct-count"),
  reverseFinalCount: document.getElementById("reverse-final-count"),
  reverseFinalList: document.getElementById("reverse-final-list"),
  reverseTree: document.getElementById("reverse-tree"),
};

function formatSeconds(totalSeconds) {
  const s = Math.round(totalSeconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const parts = [];
  if (h > 0) parts.push(`${h} 小時`);
  if (m > 0) parts.push(`${m} 分`);
  if (sec > 0 || parts.length === 0) parts.push(`${sec} 秒`);
  return parts.join(" ");
}

function materialsSummary(materials) {
  return materials.map((m) => `${ITEMS[m.id] ? ITEMS[m.id].name : m.id} × ${m.qty}`).join("、");
}

// 拓樸排序（父項目在前、子材料在後），並偵測循環配方；依目前選擇的配方走訪。
function topoOrder(rootId) {
  const visited = new Set();
  const inStack = new Set();
  const postorder = [];

  function dfs(id) {
    if (visited.has(id)) return;
    if (inStack.has(id)) {
      throw new Error(`偵測到循環配方，無法計算：${id}`);
    }
    const item = ITEMS[id];
    if (!item) throw new Error(`找不到材料代碼：${id}`);
    inStack.add(id);
    if (isCraftable(item)) {
      const recipe = getActiveRecipe(item);
      for (const m of recipe.materials) dfs(m.id);
    }
    inStack.delete(id);
    visited.add(id);
    postorder.push(id);
  }

  dfs(rootId);
  return postorder.reverse(); // 父層先、材料後
}

// 計算整體展開結果：每個項目實際需要的總數量、需要製作的次數，以及總時間。
function computePlan(rootId, rootQty) {
  const order = topoOrder(rootId);
  const demand = new Map(order.map((id) => [id, 0]));
  demand.set(rootId, rootQty);
  const actions = new Map();

  for (const id of order) {
    const item = ITEMS[id];
    const needed = demand.get(id) || 0;
    if (!isCraftable(item)) {
      actions.set(id, 0);
      continue;
    }
    const recipe = getActiveRecipe(item);
    const outputQty = recipe.outputQty || 1;
    const craftActions = Math.ceil(needed / outputQty);
    actions.set(id, craftActions);
    for (const m of recipe.materials) {
      demand.set(m.id, (demand.get(m.id) || 0) + craftActions * m.qty);
    }
  }

  let totalTime = 0;
  for (const id of order) {
    const item = ITEMS[id];
    if (isCraftable(item)) totalTime += actions.get(id) * getEffectiveCraftTime(getActiveRecipe(item));
  }

  return { order, demand, actions, totalTime };
}

function renderModeTabs() {
  const modes = [
    { key: "forward", label: "查配方（選成品）" },
    { key: "reverse", label: "查用途（選材料）" },
  ];
  el.modeTabs.innerHTML = "";
  for (const m of modes) {
    const btn = document.createElement("button");
    btn.textContent = m.label;
    btn.className = "tab" + (state.mode === m.key ? " active" : "");
    btn.addEventListener("click", () => {
      if (state.mode === m.key) return;
      state.mode = m.key;
      // forward 模式只能選可製作物；切過去時若目前選的是原始材料，先清掉避免顯示怪怪的結果
      if (state.mode === "forward" && state.selectedId && !isCraftable(ITEMS[state.selectedId])) {
        state.selectedId = null;
      }
      // 分類 tab 的內容依模式而不同（forward 只看得到可製作物的分類），切模式時重設避免停在對面模式才有的分類上
      state.category = "全部";
      state.subcategory = "全部";
      renderModeTabs();
      renderCategoryTabs();
      renderSubcategoryTabs();
      renderItemList();
      renderDetail();
    });
    el.modeTabs.appendChild(btn);
  }
}

// forward 模式只列可製作物的分類（原始材料本來就不會出現在查配方清單裡，
// 分類 tab 也不該列出「選了也一定沒東西」的分類）；reverse 模式列全部項目的分類。
function categoryScopedItems() {
  return state.mode === "forward" ? ITEM_LIST.filter(isCraftable) : ITEM_LIST;
}

function renderCategoryTabs() {
  const categories = ["全部", ...new Set(categoryScopedItems().map((i) => i.category))];
  el.categoryTabs.innerHTML = "";
  for (const cat of categories) {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.className = "tab" + (state.category === cat ? " active" : "");
    btn.addEventListener("click", () => {
      state.category = cat;
      state.subcategory = "全部";
      renderCategoryTabs();
      renderSubcategoryTabs();
      renderItemList();
    });
    el.categoryTabs.appendChild(btn);
  }
}

function renderSubcategoryTabs() {
  el.subcategoryTabs.innerHTML = "";
  if (state.category === "全部") return;

  const subcategories = [
    ...new Set(
      categoryScopedItems()
        .filter((i) => i.category === state.category && i.subcategory)
        .map((i) => i.subcategory)
    ),
  ];
  if (subcategories.length === 0) return;

  for (const sub of ["全部", ...subcategories]) {
    const btn = document.createElement("button");
    btn.textContent = sub;
    btn.className = "tab tab-sub" + (state.subcategory === sub ? " active" : "");
    btn.addEventListener("click", () => {
      state.subcategory = sub;
      renderSubcategoryTabs();
      renderItemList();
    });
    el.subcategoryTabs.appendChild(btn);
  }
}

function renderItemList() {
  const q = state.search.trim().toLowerCase();
  const filtered = ITEM_LIST.filter((item) => {
    if (state.mode === "forward" && !isCraftable(item)) return false; // 查配方模式只列出可製作的項目
    if (state.category !== "全部" && item.category !== state.category) return false;
    if (state.category !== "全部" && state.subcategory !== "全部" && item.subcategory !== state.subcategory) return false;
    if (q && !item.name.toLowerCase().includes(q) && !item.id.toLowerCase().includes(q)) return false;
    return true;
  });

  el.itemList.innerHTML = "";
  if (filtered.length === 0) {
    const li = document.createElement("li");
    li.className = "empty-hint";
    li.textContent = "找不到符合的項目";
    el.itemList.appendChild(li);
    return;
  }

  for (const item of filtered) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "item-btn" + (state.selectedId === item.id ? " active" : "");
    const catLabel = item.subcategory ? `${item.category} / ${item.subcategory}` : item.category;
    btn.innerHTML = `<span class="item-name">${item.name}</span><span class="item-cat">${catLabel}</span>`;
    btn.addEventListener("click", () => {
      state.selectedId = item.id;
      renderItemList();
      renderDetail();
    });
    li.appendChild(btn);
    el.itemList.appendChild(li);
  }
}

function renderTreeNode(itemId, neededQty, depth) {
  const item = ITEMS[itemId];
  const li = document.createElement("li");

  if (!isCraftable(item)) {
    li.innerHTML = `<span class="leaf">${item.name} × ${neededQty}</span>`;
    return li;
  }

  const recipe = getActiveRecipe(item);
  const outputQty = recipe.outputQty || 1;
  const branchActions = Math.ceil(neededQty / outputQty);
  const branchTime = branchActions * getEffectiveCraftTime(recipe);
  const multiNote = item.recipes.length > 1 ? `<span class="tree-recipe-note">（配方 ${getActiveRecipeIndex(item) + 1}/${item.recipes.length}）</span>` : "";

  const details = document.createElement("details");
  details.open = depth < 2;
  const summary = document.createElement("summary");
  summary.innerHTML = `${item.name} × ${neededQty} ${multiNote}
    <span class="tree-meta">（${recipe.processMethod ? `${recipe.processMethod}・` : ""}此分支需製作 ${branchActions} 次・約 ${formatSeconds(branchTime)}）</span>`;
  details.appendChild(summary);

  const ul = document.createElement("ul");
  for (const m of recipe.materials) {
    ul.appendChild(renderTreeNode(m.id, branchActions * m.qty, depth + 1));
  }
  details.appendChild(ul);
  li.appendChild(details);
  return li;
}

function renderRecipeChoices(plan) {
  el.recipeChoices.innerHTML = "";
  const multiIds = plan.order.filter((id) => isCraftable(ITEMS[id]) && ITEMS[id].recipes.length > 1);

  if (multiIds.length === 0) {
    el.recipeChoices.hidden = true;
    return;
  }
  el.recipeChoices.hidden = false;

  const heading = document.createElement("h3");
  heading.textContent = "配方選擇";
  el.recipeChoices.appendChild(heading);
  const hint = document.createElement("p");
  hint.className = "note";
  hint.style.margin = "0 0 10px";
  hint.textContent = "以下項目有多種製作方式，選一種來計算材料與時間。";
  el.recipeChoices.appendChild(hint);

  for (const id of multiIds) {
    const item = ITEMS[id];
    const activeIdx = getActiveRecipeIndex(item);

    const group = document.createElement("div");
    group.className = "recipe-group";
    const title = document.createElement("div");
    title.className = "recipe-group-title";
    title.textContent = item.name;
    group.appendChild(title);

    item.recipes.forEach((recipe, idx) => {
      const label = document.createElement("label");
      label.className = "recipe-option" + (idx === activeIdx ? " active" : "");
      label.innerHTML = `<input type="radio" name="recipe-${id}" ${idx === activeIdx ? "checked" : ""} />
        <span>${materialsSummary(recipe.materials)}
          <span class="recipe-meta">（${recipe.processMethod ? `${recipe.processMethod}・` : ""}每次 ${formatSeconds(getEffectiveCraftTime(recipe))}・產出 ${recipe.outputQty || 1} 個）</span>
        </span>`;
      label.querySelector("input").addEventListener("change", () => {
        state.recipeChoice.set(id, idx);
        saveRecipeChoices();
        renderDetail();
      });
      group.appendChild(label);
    });

    el.recipeChoices.appendChild(group);
  }
}

// 從某個材料開始，往上遞迴找出「沒有被任何配方使用」的終點（最終成品），並偵測循環。
function collectFinalProducts(rootId) {
  const result = new Set();

  function dfs(id, ancestors) {
    if (ancestors.has(id)) return; // 循環引用，停止
    const uses = USAGE_INDEX.get(id) || [];
    if (uses.length === 0) {
      result.add(id);
      return;
    }
    const next = new Set(ancestors);
    next.add(id);
    for (const use of uses) dfs(use.userId, next);
  }

  dfs(rootId, new Set());
  return result;
}

// 渲染反查樹的一個節點：edge 代表「上一層材料被這個 use 用掉」，往上遞迴列出還有誰用到這個 use 的產物。
function renderUsageNode(use, ancestors) {
  const item = ITEMS[use.userId];
  const li = document.createElement("li");
  const recipeNote = item.recipes && item.recipes.length > 1 ? `・配方 ${use.recipeIndex + 1}/${item.recipes.length}` : "";
  const meta = `（每次消耗 ${use.qty} 個${recipeNote}・該配方每次 ${formatSeconds(getEffectiveCraftTime(use.recipe))}・產出 ${use.recipe.outputQty || 1} 個）`;

  if (ancestors.has(use.userId)) {
    li.innerHTML = `<span class="leaf">${item.name} <span class="tree-meta">${meta}・偵測到循環引用，停止展開</span></span>`;
    return li;
  }

  const nextUses = USAGE_INDEX.get(use.userId) || [];
  if (nextUses.length === 0) {
    li.innerHTML = `<span class="leaf">${item.name} <span class="tree-meta">${meta}・目前沒有其他配方用到它，可能是最終成品</span></span>`;
    return li;
  }

  const details = document.createElement("details");
  details.open = ancestors.size < 1;
  const summary = document.createElement("summary");
  summary.innerHTML = `${item.name} <span class="tree-meta">${meta}</span>`;
  details.appendChild(summary);

  const ul = document.createElement("ul");
  const nextAncestors = new Set(ancestors);
  nextAncestors.add(use.userId);
  for (const nextUse of nextUses) {
    ul.appendChild(renderUsageNode(nextUse, nextAncestors));
  }
  details.appendChild(ul);
  li.appendChild(details);
  return li;
}

function renderReverseDetail(item) {
  el.qtyControl.hidden = true;
  el.forwardView.hidden = true;
  el.reverseView.hidden = false;

  const directUses = USAGE_INDEX.get(item.id) || [];
  const directUserIds = new Set(directUses.map((u) => u.userId));
  el.reverseDirectCount.textContent = `${directUserIds.size} 種`;

  el.reverseTree.innerHTML = "";
  if (directUses.length === 0) {
    el.reverseTree.innerHTML = `<li class="empty-hint">目前資料裡沒有任何配方用到「${item.name}」。</li>`;
    el.reverseFinalCount.textContent = "-";
    el.reverseFinalList.textContent = "";
    return;
  }

  const ancestors = new Set([item.id]);
  for (const use of directUses) {
    el.reverseTree.appendChild(renderUsageNode(use, ancestors));
  }

  const finalProducts = collectFinalProducts(item.id);
  el.reverseFinalCount.textContent = `${finalProducts.size} 種`;
  el.reverseFinalList.textContent = `最終成品：${[...finalProducts].map((id) => ITEMS[id].name).join("、")}`;
}

function renderDetail() {
  const item = ITEMS[state.selectedId];
  if (!item) {
    el.detailEmpty.hidden = false;
    el.detailContent.hidden = true;
    return;
  }
  el.detailEmpty.hidden = true;
  el.detailContent.hidden = false;
  el.detailTitle.textContent = item.name;

  if (state.mode === "reverse") {
    renderReverseDetail(item);
    return;
  }

  el.qtyControl.hidden = false;
  el.forwardView.hidden = false;
  el.reverseView.hidden = true;
  el.qtyInput.value = state.qty;

  let plan;
  try {
    plan = computePlan(item.id, state.qty);
  } catch (err) {
    el.tree.innerHTML = `<li class="error">${err.message}</li>`;
    el.materialsTableBody.innerHTML = "";
    el.craftStepsList.innerHTML = "";
    el.recipeChoices.innerHTML = "";
    el.recipeChoices.hidden = true;
    el.totalTime.textContent = "-";
    el.totalActions.textContent = "-";
    return;
  }

  // 頂端數字摘要
  el.totalTime.textContent = formatSeconds(plan.totalTime);
  const totalCraftActions = plan.order
    .filter((id) => isCraftable(ITEMS[id]))
    .reduce((sum, id) => sum + plan.actions.get(id), 0);
  el.totalActions.textContent = `${totalCraftActions} 次`;

  // 配方選擇（同一個項目有多種製作方式時，讓使用者挑一種）
  renderRecipeChoices(plan);

  // 展開樹狀結構（可點擊收合／展開）
  el.tree.innerHTML = "";
  el.tree.appendChild(renderTreeNode(item.id, state.qty, 0));

  // 原始材料總表（彙整後的實際需求，已考慮共用材料與批量產出）
  el.materialsTableBody.innerHTML = "";
  const rawIds = plan.order.filter((id) => !isCraftable(ITEMS[id]));
  if (rawIds.length === 0) {
    el.materialsTableBody.innerHTML = `<tr><td colspan="2" class="empty-hint">無原始材料</td></tr>`;
  }
  for (const id of rawIds) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${ITEMS[id].name}</td><td>${plan.demand.get(id)}</td>`;
    el.materialsTableBody.appendChild(tr);
  }

  // 建議製作順序（由最基礎的中間材料做到最終成品）
  el.craftStepsList.innerHTML = "";
  const craftIds = plan.order.filter((id) => isCraftable(ITEMS[id])).reverse();
  craftIds.forEach((id, idx) => {
    const li = document.createElement("li");
    const craftItem = ITEMS[id];
    const recipe = getActiveRecipe(craftItem);
    const actions = plan.actions.get(id);
    const perActionTime = getEffectiveCraftTime(recipe);
    const time = actions * perActionTime;
    li.innerHTML = `<strong>${idx + 1}. ${craftItem.name}</strong>
      ── ${recipe.processMethod ? `${recipe.processMethod}・` : ""}製作 ${actions} 次（每次 ${formatSeconds(perActionTime)}）
      ＝ ${formatSeconds(time)}`;
    el.craftStepsList.appendChild(li);
  });
}

function renderChangelog() {
  el.changelogList.innerHTML = "";
  for (const group of CHANGELOG) {
    const dateLi = document.createElement("li");
    dateLi.className = "changelog-date";
    dateLi.textContent = group.date;
    el.changelogList.appendChild(dateLi);
    for (const text of group.items) {
      const itemLi = document.createElement("li");
      itemLi.className = "changelog-item";
      itemLi.textContent = text;
      el.changelogList.appendChild(itemLi);
    }
  }
}

function init() {
  el.premiumToggle.checked = state.premium;
  renderModeTabs();
  renderCategoryTabs();
  renderSubcategoryTabs();
  renderItemList();
  renderDetail();
  renderChangelog();

  el.changelogToggle.addEventListener("click", () => {
    el.changelogPanel.hidden = !el.changelogPanel.hidden;
  });

  el.premiumToggle.addEventListener("change", () => {
    state.premium = el.premiumToggle.checked;
    try {
      localStorage.setItem("mobinogi_premium", state.premium ? "1" : "0");
    } catch {
      // 私密瀏覽模式等情況下可能無法寫入，忽略即可
    }
    renderDetail();
  });

  el.searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    renderItemList();
  });

  el.qtyDecrease.addEventListener("click", () => {
    state.qty = Math.max(1, state.qty - 1);
    renderDetail();
  });
  el.qtyIncrease.addEventListener("click", () => {
    state.qty = state.qty + 1;
    renderDetail();
  });
  el.qtyInput.addEventListener("change", () => {
    const v = parseInt(el.qtyInput.value, 10);
    state.qty = Number.isFinite(v) && v > 0 ? v : 1;
    renderDetail();
  });
}

init();
