# CLAUDE.md

專案慣例與工作方式，給任何在這個資料夾工作的 Claude Code session 看。

## 專案是什麼

瑪奇 MOBILE 製作計算機，純靜態網頁（HTML + CSS + JS，無 build step）。
兩個模式：查配方（選成品展開材料/時間）、查用途（選材料反查能做出什麼）。
細節見 [README.md](README.md)。

## 資料怎麼改

**永遠不要手動編輯 `data.js`。** 它是從 `recipes.csv` 產生出來的檔案（開頭有註解說明）。
要新增/修改配方：改 `recipes.csv`，然後跑

```bash
node tools/build.js
```

（`tools/convert.html` 是同一套邏輯的瀏覽器版，沒裝 Node.js 時可以用這個代替。）

`recipes.csv` 欄位：`name, category, subcategory, craft_time_sec, output_qty, materials`。
重點規則（詳見 README）：
- 用中文名稱當 id，不用另外想英文代號。
- 材料沒有自己的那一列 → 自動當成原始材料（category 預設「原料」），不用特地列出來。
- 同一個 `name` 出現多列 = 同一物品的多種配方，網站會讓使用者自己選一種來算。
- `craft_time_sec` 可以寫秒數或「1小時40分」這種格式。
- `craft_time_sec` / `craftTime` 存的是**已經有奇幻生活會員折扣（-50%）的時間**，
  網站的會員開關預設打開；取消勾選才會 ×2 還原成一般時間。

## 改完之後要驗證

有 Browser 工具的話，改完 `app.js`/`index.html`/`style.css` 或跑完 `tools/build.js`
之後，實際開起來點一下（尤其是切換查配方/查用途模式、多配方選擇、premium 開關），
不要只看程式碼覺得應該沒問題就結束。本機起服務用 `.claude/launch.json` 裡設定好的
`mobinogi-static`（`python3 -m http.server`）。

## Git 工作方式

- `git commit` 可以直接做，不用每次都先問。
- **`git push` 之前一定要先跟使用者確認，即使前面已經連續 push 過好幾次也一樣。**
  這是使用者明確要求過的規則，不是預設的 auto-mode 行為可以省略的步驟。
