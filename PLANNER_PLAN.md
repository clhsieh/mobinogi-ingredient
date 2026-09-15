# 料理經驗規劃分頁 —— 開發中筆記

> 暫時性檔案，只是為了跨電腦接續開發時不遺失完整規劃內容（原本存在
> Claude Code 的 plan 檔，那個檔案是機器本機的，不會跟著 git 走）。
> **這個功能做完、UI 也接上之後，這個檔案可以刪掉。**

## Context

七種食材（胡椒、糖、鹽、高麗菜、番茄、蘆筍、食用油）每週有購買上限。32 道「食物」
分類的料理裡，有些直接或透過中間材料（美乃滋、起司、鮮奶油、豆腐、豆乳、熟成的大塊肉）
間接用到這些食材，所以每週能做的次數其實是有限的。使用者想要一個新分頁：填入自己
「這週的購買上限」與「每道料理的經驗值」，網站幫忙算出這些受限料理該怎麼分配製作數量，
才能拿到最多總經驗值；同時把完全不受這七種食材影響、可以無限製作的料理另外列出來。

## 資料面：哪些料理受限、怎麼算真正的食材消耗

七種受限食材不會只被料理直接用到，也會透過「食材」次分類的中間材料間接用到，例如
美乃滋炒肉 → 美乃滋 → 食用油。所以不能只看料理自己那列的 `materials`，要把整棵配方樹
展開到原始材料才知道真正會吃掉多少受限食材。

**判斷「哪些料理受限」／「哪些完全不受影響」**：對每道食物分類的料理，遞迴展開它的配方樹
（沿用 `topoOrder`/`isCraftable`/`getActiveRecipe` 的走法，app.js:110-201），只要展開路徑上
出現任何一種受限食材，這道料理就算「受限」，否則歸類到「完全不需要這些食材」清單。

**受限料理的變數**：
- 每道受限料理 = 一個整數變數 `x_d`（這週要做幾次）。
- 展開路徑上會用到的中間材料（目前資料是美乃滋／起司／鮮奶油／豆腐／豆乳／熟成的大塊肉，
  但邏輯不寫死，讓它從資料動態算出來，之後 recipes.csv 再加新的間接鏈也不用改程式碼）
  也是一個整數變數 `b_m`（這週要做幾批），因為中間材料有 `outputQty`，一批可能做出不只 1 個，
  多出來的量不會浪費受限食材以外的東西，但確實會多吃受限食材，這點要精準算，不能用
  「每份料理平均分攤」這種近似法，否則算出來的「最大經驗值」可能實際上做不出來。

## 演算法：整數規劃 + 分支界限

這是一個「多維整數背包」問題（7 種資源上限、變數包含料理 `x_d` 與中間材料批次 `b_m`），
沒有現成公式解，需要用分支界限（branch and bound）搜尋。設計上優先考量「正確性優先、
不依賴外部函式庫、可以在 Node.js 直接單元測試（不需要瀏覽器）」：

- **限制式**：
  - 每種受限食材 r：（料理直接用掉的量）+（中間材料批次用掉的量）≤ 使用者填的上限。
  - 每個中間材料 m：`b_m × outputQty_m ≥ 所有用到它的料理算出來的需求量`。
- **目標**：最大化 `Σ 料理經驗值 × x_d`。
- **搜尋方式**：見下方「進度狀態」，目前用的代理鬆弛上界效能不夠，可能要換成真正的
  LP relaxation（單純形法）。
- **安全閥**：設一個搜尋節點數上限，超過就回傳目前找到最好的解，並在結果加一行提示
  「搜尋未完全跑完，此為目前找到的最佳解」，避免使用者填了很極端的數字時網頁卡死。

## 檔案：planner.js（已建立）

放這個功能的純邏輯（不碰 DOM，方便直接用 Node.js 測試）：
- `buildRestrictedGraph(cappedIds)`：對每個 `category === "食物"` 的品項展開配方樹，
  回傳 `{ restrictedIds, unrestrictedIds, relevantIntermediateIds, edges, order, ... }`。
- `evaluateExact(graph, expByDishId, fixedDishActions)`：給定每道受限料理的製作次數，
  精確算出（含中間材料批次無條件進位）實際用量與總經驗值——分支界限的葉節點驗證
  一定要用這個，不能用線性近似，否則算出來的「最大值」可能實際做不出來。
- `solveMaxExp(graph, capsById, expByDishId, nodeBudget)`：分支界限搜尋。
- `planCookingExp(expByDishId, capsById)`：主要入口，包裝上面兩者。

`index.html` 之後要在 `data.js`／`changelog.js` 之後、`app.js` 之前加一行
`<script src="planner.js"></script>`。

## UI：第三個分頁「料理經驗規劃」（還沒做）

- `app.js` 的 `renderModeTabs`（app.js:235）目前只有 `forward`/`reverse` 兩個
  `mode-tabs` 選項，新增第三個 `{ key: "planner", label: "料理經驗規劃" }`。
- 這個模式跟現有「選一個項目來看」的互動模式不同，不需要左側清單/分類 tab，
  所以在 `index.html` 加一個獨立的 `<section id="planner-view" hidden>`，跟現有
  `<main class="layout">`（含 sidebar）平級；切到 planner 模式時隱藏 `.layout`、
  顯示這個新 section（跟現在 `forwardView`/`reverseView` 互斥顯示的邏輯一樣，只是
  這次連 sidebar 也要一起藏起來）。
- 版面內容（全部食物分類料理共用同一張表輸入經驗值，不用使用者自己先分辨哪些受限）：
  1. 七種受限食材的「本週購買上限」輸入表（沿用 `table#materials-table` 的樣式）。
  2. 32 道料理的「經驗值」輸入表，可依現有 subcategory（簡便/力量/技巧/智力/共享）分組，
     沿用 `.panel h3` 小標題樣式。
  3. 結果區：沿用 `.summary-cards`/`.card` 樣式顯示「最大總經驗值」；下面一張表列出
     每道受限料理的製作數量與小計經驗值（只列 `x_d > 0` 的項目）；再一張小表顯示七種
     食材「本週用量 / 上限」。
  4. 「完全不需要這些食材的料理」列表：料理名稱＋經驗值，註明可無限製作。
- **不用「計算」按鈕**：跟現有 premium 開關／qty input 一樣，任何一個經驗值或上限
  輸入框 `change` 時就重新呼叫 `solveMaxExp` 並重新渲染結果（沿用 `init()` 裡
  `el.premiumToggle.addEventListener("change", ...)` 的寫法模式，app.js:608-627）。
  切換到 planner 分頁時也要觸發一次計算/渲染。

## 資料持久化（還沒做）

沿用 `loadPremium`/`saveRecipeChoices` 的 try/catch localStorage 寫法
（app.js:71-97）：
- `mobinogi_planner_exp`：`{ [dishId]: expValue }`，缺項或空白視為 0。
- `mobinogi_planner_caps`：`{ [ingredientId]: capValue }`，**缺項或空白視為 0**
  （已跟使用者確認：沒填 = 這週不能用這個食材）。

## 進度狀態（2026-09-16 中斷點）

`planner.js` 的核心邏輯（`buildRestrictedGraph`、`evaluateExact`、`solveMaxExp`、
`planCookingExp`）已經寫好，還**沒有**接上 `index.html`/`app.js`/`style.css`（UI 部分完全還沒動）。

**已驗證正確**（用 Node.js 直接跑，見下方指令）：
- 小型合成資料集的手算案例（2 個受限食材、1 個中間材料）算出的最佳組合與經驗值跟手算一致。
- 真實 `data.js` 的 32 道食物分類料理，`buildRestrictedGraph` 分出的受限/不受限名單
  （不受限：旅行者點心、水煮蛋、牛奶燉豬肉、蒸蛤蜊）與手動檢查 recipes.csv 的結果一致。
- 曾經有一個實際的正確性 bug 並已修好：`boundRemaining` 最早的寫法是「每種受限食材
  各自算一次上界、取最小值」，這在「剩下的料理裡有些料理完全不吃某種食材」時會出錯
  （那種食材會被那道不吃它的料理拉成 0，整體上界被錯誤壓到 0，導致漏掉本來可行的解）。
  已經改成用「代理鬆弛」（把 7 條限制式各自除以剩餘容量後加總成一條）做分數背包上界，
  數學上證明過恆為合法上界，這個 bug 修好後上面的小案例都驗證通過。

**還沒解決：效能問題（下一步要先處理這個，才能真的接 UI）**：
用真實 32 道料理裡全部 29 道受限料理、隨機給經驗值、中等大小上限（10~25）去測，
分支界限要花 10~30 秒還沒收斂完（`truncated: true`），這對「輸入變動就重新計算」的
互動式 UI 來說太慢。已經試過兩種分支方式：
1. 每道料理逐一列舉數量 0..maxQ（簡單，但分支數太多）。
2. 對每道料理的數量用二分法縮小範圍（分支數理論上少很多，但因為 `boundRemaining`
   每次呼叫都要 O(受限料理數 × 受限食材數) 排序運算，反而因為呼叫次數沒有等比例減少、
   單次呼叫又變貴，實測比方法 1 還慢）。

**懷疑的根因**：`boundRemaining` 這個「代理鬆弛」上界不夠緊（跟真正的 LP relaxation 比起來
鬆很多），導致剪枝效果不夠好，在 29 個變數、7 條限制式、彼此資源重疊度高的情況下，
搜尋樹還是太大。真正該做的可能是：
- 換成真正解 LP relaxation 的上界（標準單純形法，因為所有限制式都是 `<=` 且右手邊
  `>=0`，從「全部設 0、slack 當基底可行解」開始就能跑，不需要 Phase 1/Big-M），
  再包一層分支界限（在 LP 最優解裡挑一個還是分數的變數分支），這是教科書標準
  MILP 解法，上界會比現在的代理鬆弛緊很多，剪枝效果會好非常多。
  下一步應該先做這個，而不是再繼續調整代理鬆弛的細節。
- 或者退一步：把搜尋改成有時間預算（例如 3~5 秒內沒收斂就回傳目前最佳解，
  UI 明確標示「未完全跑完」），並且測試「真實使用情境」（使用者通常只會填幾道
  自己在意的料理經驗值，不是全部 32 道都填——`dishes` 陣列只包含經驗值 >0 的料理，
  真實情境下變數個數應該遠少於 29，還沒實測這種情境下要花多久）；中斷前正要測這個
  但被使用者喊停，這是下一步第一件事該做的驗證。

**下一步 TODO（照順序）**：
1. 先測「使用者只填 5~10 道料理經驗值」這種更貼近真實情境的案例，看現有二分法搜尋
   是否已經夠快（沒跑完就被使用者喊停，還不知道結果）。
2. 如果還是太慢，實作真正的單純形法當 LP relaxation 上界（取代 `boundRemaining`
   的代理鬆弛），這才是治本的做法。
3. 效能滿意後，接上 UI（`index.html` 新增 `planner-view` section、`app.js` 加第三個
   mode tab 跟輸入表渲染/localStorage 讀寫、`style.css` 補樣式）——這部分完全還沒開始。
4. 記得跑 `node tools/build.js` 確認沒有動到既有配方資料（`planner.js` 是新檔案，
   不會影響 build 流程，但養成習慣每次收工前跑一次）。
5. 更新 `changelog.js`（CLAUDE.md 規則）。
6. 這個功能做完之後，刪掉這個 PLANNER_PLAN.md 檔案（暫時性筆記，不是永久文件）。

**測試腳本**（原本在 scratchpad，沒有進版控，換電腦會不見；重新寫的時候可以參考這個
邏輯）：用 Node `vm` 模組把 `data.js`（或合成的 fake ITEM_LIST）、幾個 app.js 需要的
最小 stub（`isCraftable`/`getActiveRecipeIndex`/`getActiveRecipe`/`state.recipeChoice`）、
還有 `planner.js` 一起 `vm.runInContext` 執行，就能不開瀏覽器直接呼叫
`buildRestrictedGraph`/`solveMaxExp`/`planCookingExp` 驗證邏輯，例如：

```js
const fs = require("fs");
const vm = require("vm");
const dataSrc = fs.readFileSync("data.js", "utf-8");
const plannerSrc = fs.readFileSync("planner.js", "utf-8");
const sandbox = { console, state: { recipeChoice: new Map() } };
vm.createContext(sandbox);
vm.runInContext(`
  function isCraftable(item) { return Array.isArray(item.recipes) && item.recipes.length > 0; }
  function getActiveRecipeIndex(item) {
    const idx = state.recipeChoice.get(item.id);
    return idx !== undefined && idx >= 0 && idx < item.recipes.length ? idx : 0;
  }
  function getActiveRecipe(item) { return item.recipes[getActiveRecipeIndex(item)]; }
  ${dataSrc}
  var ITEMS = Object.fromEntries(ITEM_LIST.map((item) => [item.id, item]));
  ${plannerSrc}
  globalThis.__planCookingExp = planCookingExp;
`, sandbox);
const { graph, result } = sandbox.__planCookingExp(expByDishId, capsById);
```

這台機器（Windows）的 node 沒有在 PATH 裡，要用完整路徑
`"/c/Program Files/nodejs/node.exe"`（或換一台電腦後看 node 是否已經在 PATH）。

## 驗證方式

沒有瀏覽器工具可以實際點畫面，用 Node.js 直接 `require`/跑 `planner.js` 的純邏輯函式，
手算 2-3 個小案例驗證 `solveMaxExp` 算出的組合與經驗值是否符合手動推算，確保分支界限的
上界與精確驗證邏輯沒有算錯。跑完 `tools/build.js` 確認沒有影響既有配方資料。UI 接上之後
仍請使用者自己開網頁點一次「料理經驗規劃」分頁，確認三張輸入/結果表格顯示與計算結果
符合預期。
