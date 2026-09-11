#!/usr/bin/env node
// CLI 版的 recipes.csv → data.js 轉換工具（跟 tools/convert.html 用同一套邏輯）。
// 用法：node tools/build.js [輸入 CSV 路徑] [輸出 JS 路徑]
//   不帶參數的話，預設讀取專案根目錄的 recipes.csv，寫到 data.js。

"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const CSV_PATH = process.argv[2] ? path.resolve(process.cwd(), process.argv[2]) : path.join(ROOT, "recipes.csv");
const OUT_PATH = process.argv[3] ? path.resolve(process.cwd(), process.argv[3]) : path.join(ROOT, "data.js");

// 允許 craft_time_sec 直接寫「1小時40分」這種格式，自動換算成秒數。
function parseDuration(str) {
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

// 簡單的 RFC4180 風格 CSV 解析（支援雙引號欄位與逸出的 ""）
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field); field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field); field = "";
      if (!(row.length === 1 && row[0] === "")) rows.push(row);
      row = [];
    } else {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) { row.push(field); rows.push(row); }
  return rows;
}

function convert(csvText) {
  const messages = [];
  const raw = parseCSV(csvText);
  if (raw.length === 0) {
    return { messages, error: "找不到任何資料" };
  }

  const header = raw[0].map((h) => h.trim().toLowerCase());
  const required = ["name", "category", "craft_time_sec", "output_qty", "materials"];
  const missing = required.filter((h) => !header.includes(h));
  if (missing.length > 0) {
    return { messages, error: `CSV 缺少欄位：${missing.join(", ")}` };
  }
  const col = Object.fromEntries(header.map((h, idx) => [h, idx]));

  // 先依 name 分組，同一個 name 出現多次 = 同一物品的多種配方
  const groups = new Map(); // name -> { category, subcategory, recipes: [] }
  const order = []; // 保留第一次出現的順序
  let hasBlockingError = false;

  raw.slice(1).forEach((r, rowIdx) => {
    if (r.every((cell) => cell.trim() === "")) return; // 略過空白行
    const lineNo = rowIdx + 2; // +1 跳過標題列、+1 轉成 1-based
    const get = (colName) => (r[col[colName]] ?? "").trim();

    const name = get("name");
    const category = get("category");
    const subcategory = col.subcategory !== undefined ? get("subcategory") : "";
    const craftTimeStr = get("craft_time_sec");
    const outputQtyStr = get("output_qty");
    const materialsStr = get("materials");

    if (!name) { messages.push({ type: "err", text: `第 ${lineNo} 行缺少 name，已略過` }); hasBlockingError = true; return; }

    if (!groups.has(name)) {
      groups.set(name, { category: "", subcategory: "", recipes: [] });
      order.push(name);
    }
    const group = groups.get(name);
    if (category && group.category && group.category !== category) {
      messages.push({ type: "warn", text: `${name} 的 category 在不同列不一致（「${group.category}」與「${category}」），採用第一次出現的值` });
    }
    if (category && !group.category) group.category = category;
    if (subcategory && !group.subcategory) group.subcategory = subcategory;

    if (materialsStr === "") return; // 這一列沒有 materials，代表只是宣告分類、不是一筆配方

    if (craftTimeStr === "") {
      messages.push({ type: "err", text: `${name} 第 ${lineNo} 行有 materials 卻沒填 craft_time_sec` });
      hasBlockingError = true;
      return;
    }
    const craftTime = parseDuration(craftTimeStr);
    if (Number.isNaN(craftTime)) {
      messages.push({ type: "err", text: `${name} 的 craft_time_sec「${craftTimeStr}」看不懂時間格式，請填秒數或像「1小時40分」這樣的格式` });
      hasBlockingError = true;
      return;
    }

    let outputQty = 1;
    if (outputQtyStr !== "") {
      const n = Number(outputQtyStr);
      if (Number.isNaN(n)) { messages.push({ type: "err", text: `${name} 的 output_qty「${outputQtyStr}」不是數字` }); hasBlockingError = true; return; }
      outputQty = n;
    }

    let materialsInvalid = false;
    const materials = materialsStr.split(";").map((s) => s.trim()).filter(Boolean).map((pair) => {
      const [mid, qtyStr] = pair.split(":").map((s) => (s ?? "").trim());
      const qty = Number(qtyStr);
      if (!mid || Number.isNaN(qty)) {
        messages.push({ type: "err", text: `${name} 的 materials 欄位格式錯誤：「${pair}」，應為 材料名稱:數量` });
        hasBlockingError = true;
        materialsInvalid = true;
        return null;
      }
      return { id: mid, qty };
    });
    if (materialsInvalid) return;

    group.recipes.push({ craftTime, outputQty, materials });
  });

  if (hasBlockingError) {
    return { messages, error: "CSV 內容有錯誤，請修正後再試一次" };
  }

  // 組成最終項目清單
  const items = [];
  for (const name of order) {
    const group = groups.get(name);
    const item = { id: name, name, category: group.category || "未分類" };
    if (group.subcategory) item.subcategory = group.subcategory;
    if (group.recipes.length > 0) item.recipes = group.recipes;
    items.push(item);
  }

  // 材料欄位引用到、但沒有自己那一列的名稱，自動當成直接採集的原始材料
  const known = new Set(items.map((i) => i.id));
  const autoRaw = [];
  for (const item of items) {
    for (const recipe of item.recipes || []) {
      for (const m of recipe.materials) {
        if (!known.has(m.id)) {
          known.add(m.id);
          autoRaw.push({ id: m.id, name: m.id, category: "原料" });
        }
      }
    }
  }
  items.push(...autoRaw);
  if (autoRaw.length > 0) {
    messages.push({ type: "info", text: `自動視為原始材料（沒有另外那一列）：${autoRaw.map((i) => i.name).join("、")}` });
  }

  const multiCount = items.filter((i) => (i.recipes || []).length > 1).length;
  messages.push({ type: "ok", text: `轉換完成，共 ${items.length} 個項目${multiCount > 0 ? `，其中 ${multiCount} 個有多種配方` : ""}。` });

  return { items, messages };
}

function main() {
  if (!fs.existsSync(CSV_PATH)) {
    console.error(`找不到 CSV 檔案：${CSV_PATH}`);
    process.exit(1);
  }
  const csvText = fs.readFileSync(CSV_PATH, "utf-8");
  const result = convert(csvText);

  const icon = { err: "✗", warn: "⚠", ok: "✓", info: "ℹ" };
  for (const m of result.messages || []) {
    console.log(`${icon[m.type] || "-"} ${m.text}`);
  }

  if (result.error) {
    console.error(`\n${result.error}`);
    process.exit(1);
  }

  const headerComment =
    "// 本檔案由 recipes.csv 透過 tools/build.js 產生，請勿手動編輯。\n" +
    "// 要更新配方請修改 recipes.csv 後執行：node tools/build.js\n\n";
  const output = headerComment + "const ITEM_LIST = " + JSON.stringify(result.items, null, 2) + ";\n";

  fs.writeFileSync(OUT_PATH, output, "utf-8");
  console.log(`\n已寫入 ${path.relative(ROOT, OUT_PATH)}`);
}

main();
