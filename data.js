// 本檔案由 recipes.csv 透過 tools/build.js 產生，請勿手動編輯。
// 要更新配方請修改 recipes.csv 後執行：node tools/build.js

const ITEM_LIST = [
  {
    "id": "鐵錠",
    "name": "鐵錠",
    "category": "材料",
    "subcategory": "金屬",
    "recipes": [
      {
        "processMethod": "金屬加工設備Lv.1",
        "craftTime": 30,
        "outputQty": 3,
        "materials": [
          {
            "id": "礦石",
            "qty": 20
          }
        ]
      },
      {
        "processMethod": "金屬加工設備Lv.1",
        "craftTime": 30,
        "outputQty": 3,
        "materials": [
          {
            "id": "鐵礦石",
            "qty": 10
          }
        ]
      }
    ]
  },
  {
    "id": "鋼錠",
    "name": "鋼錠",
    "category": "材料",
    "subcategory": "金屬",
    "recipes": [
      {
        "processMethod": "金屬加工設備Lv.1",
        "craftTime": 300,
        "outputQty": 3,
        "materials": [
          {
            "id": "鐵錠",
            "qty": 3
          },
          {
            "id": "煤炭",
            "qty": 4
          }
        ]
      }
    ]
  },
  {
    "id": "合金鋼錠",
    "name": "合金鋼錠",
    "category": "材料",
    "subcategory": "金屬",
    "recipes": [
      {
        "processMethod": "金屬加工設備Lv.2",
        "craftTime": 4800,
        "outputQty": 3,
        "materials": [
          {
            "id": "鋼錠",
            "qty": 3
          },
          {
            "id": "銅礦石",
            "qty": 15
          },
          {
            "id": "煤炭",
            "qty": 8
          }
        ]
      }
    ]
  },
  {
    "id": "特殊鋼錠",
    "name": "特殊鋼錠",
    "category": "材料",
    "subcategory": "金屬",
    "recipes": [
      {
        "processMethod": "金屬加工設備Lv.3",
        "craftTime": 14400,
        "outputQty": 3,
        "materials": [
          {
            "id": "合金鋼錠",
            "qty": 4
          },
          {
            "id": "白銅礦石",
            "qty": 20
          },
          {
            "id": "煤炭",
            "qty": 12
          }
        ]
      }
    ]
  },
  {
    "id": "銀合金錠",
    "name": "銀合金錠",
    "category": "材料",
    "subcategory": "金屬",
    "recipes": [
      {
        "processMethod": "金屬加工設備Lv.4",
        "craftTime": 18000,
        "outputQty": 3,
        "materials": [
          {
            "id": "特殊鋼錠",
            "qty": 5
          },
          {
            "id": "銀礦石",
            "qty": 20
          },
          {
            "id": "煤炭",
            "qty": 16
          }
        ]
      }
    ]
  },
  {
    "id": "木材",
    "name": "木材",
    "category": "材料",
    "subcategory": "木材",
    "recipes": [
      {
        "processMethod": "木材加工設備Lv.1",
        "craftTime": 45,
        "outputQty": 3,
        "materials": [
          {
            "id": "原木",
            "qty": 10
          }
        ]
      }
    ]
  },
  {
    "id": "木材+",
    "name": "木材+",
    "category": "材料",
    "subcategory": "木材",
    "recipes": [
      {
        "processMethod": "木材加工設備Lv.1",
        "craftTime": 360,
        "outputQty": 3,
        "materials": [
          {
            "id": "木材",
            "qty": 3
          },
          {
            "id": "樹液",
            "qty": 4
          }
        ]
      }
    ]
  },
  {
    "id": "高級木材",
    "name": "高級木材",
    "category": "材料",
    "subcategory": "木材",
    "recipes": [
      {
        "processMethod": "木材加工設備Lv.2",
        "craftTime": 4800,
        "outputQty": 3,
        "materials": [
          {
            "id": "木材+",
            "qty": 3
          },
          {
            "id": "高級原木",
            "qty": 15
          },
          {
            "id": "樹液",
            "qty": 8
          }
        ]
      }
    ]
  },
  {
    "id": "高級木材+",
    "name": "高級木材+",
    "category": "材料",
    "subcategory": "木材",
    "recipes": [
      {
        "processMethod": "木材加工設備Lv.3",
        "craftTime": 14400,
        "outputQty": 3,
        "materials": [
          {
            "id": "高級木材",
            "qty": 4
          },
          {
            "id": "高級原木+",
            "qty": 20
          },
          {
            "id": "樹液",
            "qty": 12
          }
        ]
      }
    ]
  },
  {
    "id": "最高級木材",
    "name": "最高級木材",
    "category": "材料",
    "subcategory": "木材",
    "recipes": [
      {
        "processMethod": "木材加工設備Lv.4",
        "craftTime": 18000,
        "outputQty": 3,
        "materials": [
          {
            "id": "高級木材+",
            "qty": 5
          },
          {
            "id": "最高級原木",
            "qty": 20
          },
          {
            "id": "樹液",
            "qty": 4
          }
        ]
      }
    ]
  },
  {
    "id": "單寧粉末",
    "name": "單寧粉末",
    "category": "材料",
    "subcategory": "皮革",
    "recipes": [
      {
        "processMethod": "分解",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "樹枝",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "皮革",
    "name": "皮革",
    "category": "材料",
    "subcategory": "皮革",
    "recipes": [
      {
        "processMethod": "皮革加工設備Lv.1",
        "craftTime": 30,
        "outputQty": 3,
        "materials": [
          {
            "id": "生皮",
            "qty": 10
          }
        ]
      }
    ]
  },
  {
    "id": "皮革+",
    "name": "皮革+",
    "category": "材料",
    "subcategory": "皮革",
    "recipes": [
      {
        "processMethod": "皮革加工設備Lv.1",
        "craftTime": 300,
        "outputQty": 3,
        "materials": [
          {
            "id": "皮革",
            "qty": 3
          },
          {
            "id": "單寧粉末",
            "qty": 4
          }
        ]
      }
    ]
  },
  {
    "id": "高級皮革",
    "name": "高級皮革",
    "category": "材料",
    "subcategory": "皮革",
    "recipes": [
      {
        "processMethod": "皮革加工設備Lv.2",
        "craftTime": 4800,
        "outputQty": 3,
        "materials": [
          {
            "id": "皮革+",
            "qty": 3
          },
          {
            "id": "高級生皮",
            "qty": 15
          },
          {
            "id": "單寧粉末",
            "qty": 8
          }
        ]
      }
    ]
  },
  {
    "id": "高級皮革+",
    "name": "高級皮革+",
    "category": "材料",
    "subcategory": "皮革",
    "recipes": [
      {
        "processMethod": "皮革加工設備Lv.3",
        "craftTime": 14400,
        "outputQty": 3,
        "materials": [
          {
            "id": "高級皮革",
            "qty": 4
          },
          {
            "id": "高級生皮+",
            "qty": 20
          },
          {
            "id": "單寧粉末",
            "qty": 12
          }
        ]
      }
    ]
  },
  {
    "id": "最高級皮革",
    "name": "最高級皮革",
    "category": "材料",
    "subcategory": "皮革",
    "recipes": [
      {
        "processMethod": "皮革加工設備Lv.4",
        "craftTime": 18000,
        "outputQty": 3,
        "materials": [
          {
            "id": "高級皮革+",
            "qty": 5
          },
          {
            "id": "最高級生皮",
            "qty": 20
          },
          {
            "id": "單寧粉末",
            "qty": 16
          }
        ]
      }
    ]
  },
  {
    "id": "布料",
    "name": "布料",
    "category": "材料",
    "subcategory": "布料",
    "recipes": [
      {
        "processMethod": "布料加工設備Lv.1",
        "craftTime": 45,
        "outputQty": 3,
        "materials": [
          {
            "id": "羊毛",
            "qty": 10
          }
        ]
      }
    ]
  },
  {
    "id": "布料+",
    "name": "布料+",
    "category": "材料",
    "subcategory": "布料",
    "recipes": [
      {
        "processMethod": "布料加工設備Lv.1",
        "craftTime": 360,
        "outputQty": 3,
        "materials": [
          {
            "id": "布料",
            "qty": 3
          },
          {
            "id": "羊毛",
            "qty": 4
          }
        ]
      }
    ]
  },
  {
    "id": "高級布料",
    "name": "高級布料",
    "category": "材料",
    "subcategory": "布料",
    "recipes": [
      {
        "processMethod": "布料加工設備Lv.2",
        "craftTime": 4800,
        "outputQty": 3,
        "materials": [
          {
            "id": "布料+",
            "qty": 3
          },
          {
            "id": "高級羊毛",
            "qty": 15
          },
          {
            "id": "羊毛",
            "qty": 8
          }
        ]
      }
    ]
  },
  {
    "id": "高級布料+",
    "name": "高級布料+",
    "category": "材料",
    "subcategory": "布料",
    "recipes": [
      {
        "processMethod": "布料加工設備Lv.3",
        "craftTime": 14400,
        "outputQty": 3,
        "materials": [
          {
            "id": "高級布料",
            "qty": 4
          },
          {
            "id": "高級羊毛+",
            "qty": 20
          },
          {
            "id": "羊毛",
            "qty": 12
          }
        ]
      }
    ]
  },
  {
    "id": "最高級布料",
    "name": "最高級布料",
    "category": "材料",
    "subcategory": "布料",
    "recipes": [
      {
        "processMethod": "布料加工設備Lv.4",
        "craftTime": 18000,
        "outputQty": 3,
        "materials": [
          {
            "id": "高級布料+",
            "qty": 5
          },
          {
            "id": "最高級羊毛",
            "qty": 20
          },
          {
            "id": "羊毛",
            "qty": 16
          }
        ]
      }
    ]
  },
  {
    "id": "絲綢",
    "name": "絲綢",
    "category": "材料",
    "subcategory": "布料",
    "recipes": [
      {
        "processMethod": "布料加工設備Lv.1",
        "craftTime": 90,
        "outputQty": 2,
        "materials": [
          {
            "id": "蜘蛛網",
            "qty": 10
          }
        ]
      }
    ]
  },
  {
    "id": "高級絲綢",
    "name": "高級絲綢",
    "category": "材料",
    "subcategory": "布料",
    "recipes": [
      {
        "processMethod": "布料加工設備Lv.2",
        "craftTime": 6600,
        "outputQty": 2,
        "materials": [
          {
            "id": "絲綢",
            "qty": 4
          },
          {
            "id": "壯壯蘑菇汁液",
            "qty": 8
          }
        ]
      }
    ]
  },
  {
    "id": "最高級絲綢",
    "name": "最高級絲綢",
    "category": "材料",
    "subcategory": "布料",
    "recipes": [
      {
        "processMethod": "布料加工設備Lv.4",
        "craftTime": 21600,
        "outputQty": 2,
        "materials": [
          {
            "id": "高級絲綢",
            "qty": 4
          },
          {
            "id": "最高級蜘蛛網",
            "qty": 20
          },
          {
            "id": "壯壯蘑菇汁液",
            "qty": 16
          }
        ]
      }
    ]
  },
  {
    "id": "新芽蘑菇孢子",
    "name": "新芽蘑菇孢子",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.2",
        "craftTime": 300,
        "outputQty": 15,
        "materials": [
          {
            "id": "新芽蘑菇",
            "qty": 30
          },
          {
            "id": "紙",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "新芽蘑菇汁液",
    "name": "新芽蘑菇汁液",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.1",
        "craftTime": 30,
        "outputQty": 5,
        "materials": [
          {
            "id": "新芽蘑菇孢子",
            "qty": 10
          },
          {
            "id": "裝水的瓶子",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "壯壯蘑菇粉末",
    "name": "壯壯蘑菇粉末",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.1",
        "craftTime": 150,
        "outputQty": 5,
        "materials": [
          {
            "id": "壯壯蘑菇",
            "qty": 20
          }
        ]
      }
    ]
  },
  {
    "id": "壯壯蘑菇孢子",
    "name": "壯壯蘑菇孢子",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.2",
        "craftTime": 300,
        "outputQty": 15,
        "materials": [
          {
            "id": "壯壯蘑菇",
            "qty": 30
          },
          {
            "id": "紙",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "壯壯蘑菇汁液",
    "name": "壯壯蘑菇汁液",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.1",
        "craftTime": 300,
        "outputQty": 5,
        "materials": [
          {
            "id": "壯壯蘑菇孢子",
            "qty": 10
          },
          {
            "id": "裝水的瓶子",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "咻咻蘑菇孢子",
    "name": "咻咻蘑菇孢子",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.2",
        "craftTime": 360,
        "outputQty": 15,
        "materials": [
          {
            "id": "咻咻蘑菇",
            "qty": 30
          },
          {
            "id": "紙",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "咻咻蘑菇汁液",
    "name": "咻咻蘑菇汁液",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.2",
        "craftTime": 1200,
        "outputQty": 5,
        "materials": [
          {
            "id": "咻咻蘑菇孢子",
            "qty": 10
          },
          {
            "id": "裝水的瓶子",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "淨淨蘑菇孢子",
    "name": "淨淨蘑菇孢子",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.3",
        "craftTime": 1500,
        "outputQty": 15,
        "materials": [
          {
            "id": "淨淨蘑菇",
            "qty": 30
          },
          {
            "id": "紙",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "淨淨蘑菇汁液",
    "name": "淨淨蘑菇汁液",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.3",
        "craftTime": 3000,
        "outputQty": 5,
        "materials": [
          {
            "id": "淨淨蘑菇孢子",
            "qty": 10
          },
          {
            "id": "裝水的瓶子",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "增幅蘑菇孢子",
    "name": "增幅蘑菇孢子",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.4",
        "craftTime": 1800,
        "outputQty": 15,
        "materials": [
          {
            "id": "增幅蘑菇",
            "qty": 30
          },
          {
            "id": "紙",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "增幅蘑菇汁液",
    "name": "增幅蘑菇汁液",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.4",
        "craftTime": 5400,
        "outputQty": 5,
        "materials": [
          {
            "id": "增幅蘑菇孢子",
            "qty": 10
          },
          {
            "id": "咻咻蘑菇汁液",
            "qty": 10
          }
        ]
      }
    ]
  },
  {
    "id": "躲躲花粉末",
    "name": "躲躲花粉末",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.3",
        "craftTime": 900,
        "outputQty": 5,
        "materials": [
          {
            "id": "躲躲花",
            "qty": 20
          }
        ]
      }
    ]
  },
  {
    "id": "傷痕花粉末",
    "name": "傷痕花粉末",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.4",
        "craftTime": 1500,
        "outputQty": 5,
        "materials": [
          {
            "id": "傷痕花",
            "qty": 20
          }
        ]
      }
    ]
  },
  {
    "id": "光輝結晶",
    "name": "光輝結晶",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.1",
        "craftTime": 600,
        "outputQty": 3,
        "materials": [
          {
            "id": "幽靈螢火蟲",
            "qty": 3
          },
          {
            "id": "魔力藥草",
            "qty": 10
          },
          {
            "id": "黏土",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "火苗結晶",
    "name": "火苗結晶",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.2",
        "craftTime": 600,
        "outputQty": 3,
        "materials": [
          {
            "id": "夕陽蝴蝶",
            "qty": 3
          },
          {
            "id": "魔力藥草",
            "qty": 10
          },
          {
            "id": "黏土",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "冰霜結晶",
    "name": "冰霜結晶",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.3",
        "craftTime": 600,
        "outputQty": 3,
        "materials": [
          {
            "id": "白雙金龜子",
            "qty": 3
          },
          {
            "id": "魔力藥草",
            "qty": 10
          },
          {
            "id": "黏土",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "電氣結晶",
    "name": "電氣結晶",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.4",
        "craftTime": 600,
        "outputQty": 3,
        "materials": [
          {
            "id": "落葉蛾",
            "qty": 3
          },
          {
            "id": "魔力藥草",
            "qty": 10
          },
          {
            "id": "黏土",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "魔力起爆劑",
    "name": "魔力起爆劑",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.3",
        "craftTime": 4650,
        "outputQty": 10,
        "materials": [
          {
            "id": "蘊含魔力的石頭",
            "qty": 50
          },
          {
            "id": "魔力藥草",
            "qty": 50
          },
          {
            "id": "閃閃發亮的苔蘚",
            "qty": 25
          }
        ]
      }
    ]
  },
  {
    "id": "封印的憤怒碎片",
    "name": "封印的憤怒碎片",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.3",
        "craftTime": 4650,
        "outputQty": 1,
        "materials": [
          {
            "id": "憤怒的碎片",
            "qty": 10
          },
          {
            "id": "紙",
            "qty": 10
          },
          {
            "id": "封印結晶",
            "qty": 5
          }
        ]
      }
    ]
  },
  {
    "id": "封印的遺忘碎片",
    "name": "封印的遺忘碎片",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.3",
        "craftTime": 4650,
        "outputQty": 1,
        "materials": [
          {
            "id": "遺忘的碎片",
            "qty": 10
          },
          {
            "id": "紙",
            "qty": 10
          },
          {
            "id": "封印結晶",
            "qty": 5
          }
        ]
      }
    ]
  },
  {
    "id": "封印的野性碎片",
    "name": "封印的野性碎片",
    "category": "材料",
    "subcategory": "藥品",
    "recipes": [
      {
        "processMethod": "藥品加工設備Lv.3",
        "craftTime": 4650,
        "outputQty": 1,
        "materials": [
          {
            "id": "野性的碎片",
            "qty": 10
          },
          {
            "id": "紙",
            "qty": 10
          },
          {
            "id": "封印結晶",
            "qty": 5
          }
        ]
      }
    ]
  },
  {
    "id": "美乃滋",
    "name": "美乃滋",
    "category": "材料",
    "subcategory": "食材",
    "recipes": [
      {
        "processMethod": "食材加工設備Lv.1",
        "craftTime": 45,
        "outputQty": 3,
        "materials": [
          {
            "id": "雞蛋",
            "qty": 10
          },
          {
            "id": "食用油",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "麵粉",
    "name": "麵粉",
    "category": "材料",
    "subcategory": "食材",
    "recipes": [
      {
        "processMethod": "食材加工設備Lv.2",
        "craftTime": 600,
        "outputQty": 3,
        "materials": [
          {
            "id": "小麥",
            "qty": 15
          }
        ]
      }
    ]
  },
  {
    "id": "起司",
    "name": "起司",
    "category": "材料",
    "subcategory": "食材",
    "recipes": [
      {
        "processMethod": "食材加工設備Lv.2",
        "craftTime": 600,
        "outputQty": 3,
        "materials": [
          {
            "id": "牛奶",
            "qty": 6
          },
          {
            "id": "鹽",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "麵",
    "name": "麵",
    "category": "材料",
    "subcategory": "食材",
    "recipes": [
      {
        "processMethod": "食材加工設備Lv.3",
        "craftTime": 1500,
        "outputQty": 3,
        "materials": [
          {
            "id": "麵粉",
            "qty": 3
          },
          {
            "id": "雞蛋",
            "qty": 5
          },
          {
            "id": "裝水的瓶子",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "鮮奶油",
    "name": "鮮奶油",
    "category": "材料",
    "subcategory": "食材",
    "recipes": [
      {
        "processMethod": "食材加工設備Lv.3",
        "craftTime": 1500,
        "outputQty": 3,
        "materials": [
          {
            "id": "牛奶",
            "qty": 12
          },
          {
            "id": "雞蛋",
            "qty": 6
          },
          {
            "id": "糖",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "泡水的豆子",
    "name": "泡水的豆子",
    "category": "材料",
    "subcategory": "食材",
    "recipes": [
      {
        "processMethod": "食材加工設備Lv.4",
        "craftTime": 1200,
        "outputQty": 5,
        "materials": [
          {
            "id": "黃豆",
            "qty": 30
          },
          {
            "id": "裝水的瓶子",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "豆腐",
    "name": "豆腐",
    "category": "材料",
    "subcategory": "食材",
    "recipes": [
      {
        "processMethod": "食材加工設備Lv.4",
        "craftTime": 3300,
        "outputQty": 3,
        "materials": [
          {
            "id": "泡水的豆子",
            "qty": 3
          },
          {
            "id": "裝水的瓶子",
            "qty": 3
          },
          {
            "id": "鹽",
            "qty": 2
          },
          {
            "id": "布料",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "豆乳",
    "name": "豆乳",
    "category": "材料",
    "subcategory": "食材",
    "recipes": [
      {
        "processMethod": "食材加工設備Lv.4",
        "craftTime": 3300,
        "outputQty": 3,
        "materials": [
          {
            "id": "泡水的豆子",
            "qty": 3
          },
          {
            "id": "裝水的瓶子",
            "qty": 3
          },
          {
            "id": "鹽",
            "qty": 1
          },
          {
            "id": "食用油",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "熟成的大塊肉",
    "name": "熟成的大塊肉",
    "category": "材料",
    "subcategory": "食材",
    "recipes": [
      {
        "processMethod": "食材加工設備Lv.4",
        "craftTime": 9000,
        "outputQty": 1,
        "materials": [
          {
            "id": "大塊肉",
            "qty": 1
          },
          {
            "id": "藥草",
            "qty": 6
          },
          {
            "id": "大蒜",
            "qty": 2
          },
          {
            "id": "鹽",
            "qty": 2
          },
          {
            "id": "胡椒",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "旅行者點心",
    "name": "旅行者點心",
    "category": "食物",
    "subcategory": "簡便",
    "recipes": [
      {
        "processMethod": "立即製作",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "雞蛋",
            "qty": 1
          },
          {
            "id": "肉",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "煎蛋",
    "name": "煎蛋",
    "category": "食物",
    "subcategory": "簡便",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.1",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "雞蛋",
            "qty": 1
          },
          {
            "id": "鹽",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "水煮蛋",
    "name": "水煮蛋",
    "category": "食物",
    "subcategory": "簡便",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.1",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "雞蛋",
            "qty": 1
          },
          {
            "id": "裝水的瓶子",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "烤肉",
    "name": "烤肉",
    "category": "食物",
    "subcategory": "力量",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.1",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "肉",
            "qty": 4
          },
          {
            "id": "藥草",
            "qty": 2
          },
          {
            "id": "鹽",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "美乃滋炒肉",
    "name": "美乃滋炒肉",
    "category": "食物",
    "subcategory": "力量",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.1",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "肉",
            "qty": 4
          },
          {
            "id": "高麗菜",
            "qty": 1
          },
          {
            "id": "美乃滋",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "牛奶燉豬肉",
    "name": "牛奶燉豬肉",
    "category": "食物",
    "subcategory": "力量",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.2",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "肉",
            "qty": 8
          },
          {
            "id": "牛奶",
            "qty": 4
          },
          {
            "id": "大蒜",
            "qty": 2
          },
          {
            "id": "藥草",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "起司鍋",
    "name": "起司鍋",
    "category": "食物",
    "subcategory": "力量",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.2",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "肉",
            "qty": 8
          },
          {
            "id": "起司",
            "qty": 2
          },
          {
            "id": "馬鈴薯",
            "qty": 4
          },
          {
            "id": "鹽",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "蒸蛤蜊",
    "name": "蒸蛤蜊",
    "category": "食物",
    "subcategory": "力量",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.3",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "貝類",
            "qty": 10
          },
          {
            "id": "裝水的瓶子",
            "qty": 5
          },
          {
            "id": "檸檬",
            "qty": 4
          },
          {
            "id": "藥草",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "奶油醬牛排",
    "name": "奶油醬牛排",
    "category": "食物",
    "subcategory": "力量",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.3",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "肉",
            "qty": 10
          },
          {
            "id": "鮮奶油",
            "qty": 2
          },
          {
            "id": "大蒜",
            "qty": 2
          },
          {
            "id": "胡椒",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "沙威瑪",
    "name": "沙威瑪",
    "category": "食物",
    "subcategory": "力量",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.4",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "清淡的肉",
            "qty": 10
          },
          {
            "id": "黃豆",
            "qty": 12
          },
          {
            "id": "麵粉",
            "qty": 3
          },
          {
            "id": "高麗菜",
            "qty": 5
          },
          {
            "id": "檸檬",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "帕瑪森肉排",
    "name": "帕瑪森肉排",
    "category": "食物",
    "subcategory": "力量",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.4",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "清淡的肉",
            "qty": 10
          },
          {
            "id": "起司",
            "qty": 3
          },
          {
            "id": "番茄",
            "qty": 1
          },
          {
            "id": "胡椒",
            "qty": 1
          },
          {
            "id": "鹽",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "烤整顆馬鈴薯",
    "name": "烤整顆馬鈴薯",
    "category": "食物",
    "subcategory": "技巧",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.1",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "馬鈴薯",
            "qty": 4
          },
          {
            "id": "藥草",
            "qty": 2
          },
          {
            "id": "糖",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "馬鈴薯沙拉",
    "name": "馬鈴薯沙拉",
    "category": "食物",
    "subcategory": "技巧",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.1",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "馬鈴薯",
            "qty": 4
          },
          {
            "id": "高麗菜",
            "qty": 2
          },
          {
            "id": "美乃滋",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "炒蔬菜",
    "name": "炒蔬菜",
    "category": "食物",
    "subcategory": "技巧",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.2",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "馬鈴薯",
            "qty": 8
          },
          {
            "id": "洋蔥",
            "qty": 3
          },
          {
            "id": "高麗菜",
            "qty": 6
          },
          {
            "id": "藥草",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "瑞可塔起司沙拉",
    "name": "瑞可塔起司沙拉",
    "category": "食物",
    "subcategory": "技巧",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.2",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "高麗菜",
            "qty": 4
          },
          {
            "id": "起司",
            "qty": 2
          },
          {
            "id": "美乃滋",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "馬鈴薯湯",
    "name": "馬鈴薯湯",
    "category": "食物",
    "subcategory": "技巧",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.3",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "馬鈴薯",
            "qty": 12
          },
          {
            "id": "牛奶",
            "qty": 5
          },
          {
            "id": "藥草",
            "qty": 3
          },
          {
            "id": "胡椒",
            "qty": 6
          }
        ]
      }
    ]
  },
  {
    "id": "蒜香橄欖油義大利麵",
    "name": "蒜香橄欖油義大利麵",
    "category": "食物",
    "subcategory": "技巧",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.3",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "大蒜",
            "qty": 7
          },
          {
            "id": "麵",
            "qty": 2
          },
          {
            "id": "洋蔥",
            "qty": 2
          },
          {
            "id": "胡椒",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "豆腐排",
    "name": "豆腐排",
    "category": "食物",
    "subcategory": "技巧",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.4",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "豆腐",
            "qty": 5
          },
          {
            "id": "防風草",
            "qty": 6
          },
          {
            "id": "大蒜",
            "qty": 4
          },
          {
            "id": "胡椒",
            "qty": 3
          },
          {
            "id": "食用油",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "豆腐麵",
    "name": "豆腐麵",
    "category": "食物",
    "subcategory": "技巧",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.4",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "豆腐",
            "qty": 5
          },
          {
            "id": "裝水的瓶子",
            "qty": 5
          },
          {
            "id": "洋蔥",
            "qty": 5
          },
          {
            "id": "白蘿蔔",
            "qty": 1
          },
          {
            "id": "鹽",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "蘋果汁",
    "name": "蘋果汁",
    "category": "食物",
    "subcategory": "智力",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.1",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "蘋果",
            "qty": 4
          },
          {
            "id": "藥草",
            "qty": 2
          },
          {
            "id": "裝水的瓶子",
            "qty": 1
          },
          {
            "id": "糖",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "蘋果沙拉",
    "name": "蘋果沙拉",
    "category": "食物",
    "subcategory": "智力",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.1",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "蘋果",
            "qty": 4
          },
          {
            "id": "高麗菜",
            "qty": 2
          },
          {
            "id": "美乃滋",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "起司玉米",
    "name": "起司玉米",
    "category": "食物",
    "subcategory": "智力",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.2",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "玉米",
            "qty": 10
          },
          {
            "id": "起司",
            "qty": 2
          },
          {
            "id": "藥草",
            "qty": 2
          },
          {
            "id": "糖",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "蘋果舒芙蕾",
    "name": "蘋果舒芙蕾",
    "category": "食物",
    "subcategory": "智力",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.2",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "蘋果",
            "qty": 8
          },
          {
            "id": "麵粉",
            "qty": 2
          },
          {
            "id": "雞蛋",
            "qty": 4
          },
          {
            "id": "糖",
            "qty": 4
          }
        ]
      }
    ]
  },
  {
    "id": "冰草莓飲",
    "name": "冰草莓飲",
    "category": "食物",
    "subcategory": "智力",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.3",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "冰",
            "qty": 10
          },
          {
            "id": "草莓",
            "qty": 6
          },
          {
            "id": "藥草",
            "qty": 3
          },
          {
            "id": "糖",
            "qty": 4
          }
        ]
      }
    ]
  },
  {
    "id": "蘋果鮮奶油蛋糕",
    "name": "蘋果鮮奶油蛋糕",
    "category": "食物",
    "subcategory": "智力",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.3",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "蘋果",
            "qty": 12
          },
          {
            "id": "鮮奶油",
            "qty": 2
          },
          {
            "id": "麵粉",
            "qty": 4
          },
          {
            "id": "糖",
            "qty": 9
          }
        ]
      }
    ]
  },
  {
    "id": "豆乳刨冰",
    "name": "豆乳刨冰",
    "category": "食物",
    "subcategory": "智力",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.4",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "豆乳",
            "qty": 4
          },
          {
            "id": "冰",
            "qty": 10
          },
          {
            "id": "檸檬",
            "qty": 2
          },
          {
            "id": "糖",
            "qty": 6
          },
          {
            "id": "藥草",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "豆乳防風草蛋糕",
    "name": "豆乳防風草蛋糕",
    "category": "食物",
    "subcategory": "智力",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.4",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "豆乳",
            "qty": 4
          },
          {
            "id": "防風草",
            "qty": 6
          },
          {
            "id": "鮮奶油",
            "qty": 2
          },
          {
            "id": "麵粉",
            "qty": 4
          },
          {
            "id": "糖",
            "qty": 9
          }
        ]
      }
    ]
  },
  {
    "id": "白肉魚奶油煎魚",
    "name": "白肉魚奶油煎魚",
    "category": "食物",
    "subcategory": "共享",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.3",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "布雷夫尼鯉魚",
            "qty": 5
          },
          {
            "id": "銀鯽魚",
            "qty": 3
          },
          {
            "id": "馬鈴薯",
            "qty": 5
          },
          {
            "id": "麵粉",
            "qty": 3
          },
          {
            "id": "檸檬",
            "qty": 5
          },
          {
            "id": "鹽",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "馬賽魚湯",
    "name": "馬賽魚湯",
    "category": "食物",
    "subcategory": "共享",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.3",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "彩虹鱒魚",
            "qty": 4
          },
          {
            "id": "香魚",
            "qty": 4
          },
          {
            "id": "番茄",
            "qty": 6
          },
          {
            "id": "貝類",
            "qty": 5
          },
          {
            "id": "洋蔥",
            "qty": 2
          },
          {
            "id": "大蒜",
            "qty": 4
          }
        ]
      }
    ]
  },
  {
    "id": "鯖魚與鮭魚排",
    "name": "鯖魚與鮭魚排",
    "category": "食物",
    "subcategory": "共享",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.3",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "鯖魚",
            "qty": 5
          },
          {
            "id": "鮭魚",
            "qty": 3
          },
          {
            "id": "美乃滋",
            "qty": 2
          },
          {
            "id": "蘆筍",
            "qty": 4
          },
          {
            "id": "鹽",
            "qty": 2
          },
          {
            "id": "胡椒",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "鯰魚炸魚薯條",
    "name": "鯰魚炸魚薯條",
    "category": "食物",
    "subcategory": "共享",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.3",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "鯰魚",
            "qty": 6
          },
          {
            "id": "馬鈴薯",
            "qty": 6
          },
          {
            "id": "麵粉",
            "qty": 3
          },
          {
            "id": "豌豆",
            "qty": 4
          },
          {
            "id": "檸檬",
            "qty": 2
          },
          {
            "id": "鹽",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "鱸魚辣魚湯",
    "name": "鱸魚辣魚湯",
    "category": "食物",
    "subcategory": "共享",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.4",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "鱸魚",
            "qty": 6
          },
          {
            "id": "白蘿蔔",
            "qty": 4
          },
          {
            "id": "洋蔥",
            "qty": 6
          },
          {
            "id": "裝水的瓶子",
            "qty": 5
          },
          {
            "id": "辣椒粉",
            "qty": 4
          },
          {
            "id": "胡椒",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "大盛宴：不滅之火的紅酒燉牛肉",
    "name": "大盛宴：不滅之火的紅酒燉牛肉",
    "category": "食物",
    "subcategory": "共享",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.4",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "盛宴材料：不滅之火",
            "qty": 4
          },
          {
            "id": "熟成的大塊肉",
            "qty": 8
          },
          {
            "id": "厚實的馬鈴薯",
            "qty": 24
          },
          {
            "id": "番茄",
            "qty": 16
          },
          {
            "id": "洋蔥",
            "qty": 16
          },
          {
            "id": "防風草",
            "qty": 16
          },
          {
            "id": "鹽",
            "qty": 4
          }
        ]
      }
    ]
  },
  {
    "id": "暴擊秘藥",
    "name": "暴擊秘藥",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.1",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "四葉草",
            "qty": 10
          },
          {
            "id": "咻咻蘑菇汁液",
            "qty": 3
          },
          {
            "id": "錢幣瓢蟲",
            "qty": 6
          },
          {
            "id": "煉金術碎屑",
            "qty": 10
          }
        ]
      }
    ]
  },
  {
    "id": "絕招秘藥",
    "name": "絕招秘藥",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.1",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "毅力草",
            "qty": 10
          },
          {
            "id": "咻咻蘑菇汁液",
            "qty": 3
          },
          {
            "id": "白花蝶",
            "qty": 6
          },
          {
            "id": "煉金術碎屑",
            "qty": 10
          }
        ]
      }
    ]
  },
  {
    "id": "傷害減少秘藥",
    "name": "傷害減少秘藥",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.1",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "血紅藥草",
            "qty": 10
          },
          {
            "id": "咻咻蘑菇汁液",
            "qty": 3
          },
          {
            "id": "獨角仙",
            "qty": 6
          },
          {
            "id": "煉金術碎屑",
            "qty": 10
          }
        ]
      }
    ]
  },
  {
    "id": "移動速度秘藥",
    "name": "移動速度秘藥",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.1",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "箭花",
            "qty": 10
          },
          {
            "id": "咻咻蘑菇汁液",
            "qty": 3
          },
          {
            "id": "滴答螢火蟲",
            "qty": 6
          },
          {
            "id": "煉金術碎屑",
            "qty": 10
          }
        ]
      }
    ]
  },
  {
    "id": "高級暴擊秘藥",
    "name": "高級暴擊秘藥",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.2",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "暴擊秘藥",
            "qty": 9
          },
          {
            "id": "淨淨蘑菇汁液",
            "qty": 5
          },
          {
            "id": "廢墟的魔力石",
            "qty": 1
          },
          {
            "id": "煉金術碎屑",
            "qty": 20
          }
        ]
      }
    ]
  },
  {
    "id": "高級絕招秘藥",
    "name": "高級絕招秘藥",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.2",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "絕招秘藥",
            "qty": 9
          },
          {
            "id": "淨淨蘑菇汁液",
            "qty": 5
          },
          {
            "id": "廢墟的魔力石",
            "qty": 1
          },
          {
            "id": "煉金術碎屑",
            "qty": 20
          }
        ]
      }
    ]
  },
  {
    "id": "高級傷害減少秘藥",
    "name": "高級傷害減少秘藥",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.2",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "傷害減少秘藥",
            "qty": 9
          },
          {
            "id": "淨淨蘑菇汁液",
            "qty": 5
          },
          {
            "id": "廢墟的魔力石",
            "qty": 1
          },
          {
            "id": "煉金術碎屑",
            "qty": 20
          }
        ]
      }
    ]
  },
  {
    "id": "高級移動速度秘藥",
    "name": "高級移動速度秘藥",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.2",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "移動速度秘藥",
            "qty": 9
          },
          {
            "id": "淨淨蘑菇汁液",
            "qty": 5
          },
          {
            "id": "廢墟的魔力石",
            "qty": 1
          },
          {
            "id": "煉金術碎屑",
            "qty": 20
          }
        ]
      }
    ]
  },
  {
    "id": "強擊強化秘藥",
    "name": "強擊強化秘藥",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.3",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "血紅藥草",
            "qty": 10
          },
          {
            "id": "淨淨蘑菇汁液",
            "qty": 3
          },
          {
            "id": "獨角仙",
            "qty": 10
          },
          {
            "id": "煉金術碎屑",
            "qty": 10
          }
        ]
      }
    ]
  },
  {
    "id": "連擊強化秘藥",
    "name": "連擊強化秘藥",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.3",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "箭花",
            "qty": 10
          },
          {
            "id": "淨淨蘑菇汁液",
            "qty": 3
          },
          {
            "id": "滴答螢火蟲",
            "qty": 10
          },
          {
            "id": "煉金術碎屑",
            "qty": 10
          }
        ]
      }
    ]
  },
  {
    "id": "廣域強化秘藥",
    "name": "廣域強化秘藥",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.3",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "魔力藥草",
            "qty": 10
          },
          {
            "id": "淨淨蘑菇汁液",
            "qty": 3
          },
          {
            "id": "白花蝶",
            "qty": 10
          },
          {
            "id": "煉金術碎屑",
            "qty": 10
          }
        ]
      }
    ]
  },
  {
    "id": "高級強擊強化秘藥",
    "name": "高級強擊強化秘藥",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.4",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "強擊強化秘藥",
            "qty": 5
          },
          {
            "id": "增幅蘑菇汁液",
            "qty": 5
          },
          {
            "id": "礦山的魔力石",
            "qty": 6
          },
          {
            "id": "煉金術碎屑",
            "qty": 20
          }
        ]
      }
    ]
  },
  {
    "id": "高級連擊強化秘藥",
    "name": "高級連擊強化秘藥",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.4",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "連擊強化秘藥",
            "qty": 5
          },
          {
            "id": "增幅蘑菇汁液",
            "qty": 5
          },
          {
            "id": "礦山的魔力石",
            "qty": 6
          },
          {
            "id": "煉金術碎屑",
            "qty": 20
          }
        ]
      }
    ]
  },
  {
    "id": "高級廣域強化秘藥",
    "name": "高級廣域強化秘藥",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.4",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "廣域強化秘藥",
            "qty": 5
          },
          {
            "id": "增幅蘑菇汁液",
            "qty": 5
          },
          {
            "id": "礦山的魔力石",
            "qty": 6
          },
          {
            "id": "煉金術碎屑",
            "qty": 20
          }
        ]
      }
    ]
  },
  {
    "id": "混合強化秘藥(山崩)",
    "name": "混合強化秘藥(山崩)",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.3",
        "craftTime": 0,
        "outputQty": 2,
        "materials": [
          {
            "id": "強擊強化秘藥",
            "qty": 3
          },
          {
            "id": "連擊強化秘藥",
            "qty": 3
          },
          {
            "id": "強化祕藥乳化劑",
            "qty": 6
          },
          {
            "id": "生命的魔力石",
            "qty": 10
          },
          {
            "id": "憤怒的碎片",
            "qty": 20
          }
        ]
      }
    ]
  },
  {
    "id": "混合強化秘藥(風暴)",
    "name": "混合強化秘藥(風暴)",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.3",
        "craftTime": 0,
        "outputQty": 2,
        "materials": [
          {
            "id": "強擊強化秘藥",
            "qty": 3
          },
          {
            "id": "廣域強化秘藥",
            "qty": 3
          },
          {
            "id": "強化祕藥乳化劑",
            "qty": 6
          },
          {
            "id": "生命的魔力石",
            "qty": 10
          },
          {
            "id": "遺忘的碎片",
            "qty": 20
          }
        ]
      }
    ]
  },
  {
    "id": "混合強化秘藥(怒濤)",
    "name": "混合強化秘藥(怒濤)",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.3",
        "craftTime": 0,
        "outputQty": 2,
        "materials": [
          {
            "id": "連擊強化秘藥",
            "qty": 3
          },
          {
            "id": "廣域強化秘藥",
            "qty": 3
          },
          {
            "id": "強化祕藥乳化劑",
            "qty": 6
          },
          {
            "id": "生命的魔力石",
            "qty": 10
          },
          {
            "id": "野性的碎片",
            "qty": 20
          }
        ]
      }
    ]
  },
  {
    "id": "高級混合強化秘藥(山崩)",
    "name": "高級混合強化秘藥(山崩)",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.4",
        "craftTime": 0,
        "outputQty": 2,
        "materials": [
          {
            "id": "高級強擊強化秘藥",
            "qty": 3
          },
          {
            "id": "高級連擊強化秘藥",
            "qty": 3
          },
          {
            "id": "強化祕藥乳化劑",
            "qty": 10
          },
          {
            "id": "生命的魔力石",
            "qty": 25
          },
          {
            "id": "憤怒的碎片",
            "qty": 60
          }
        ]
      }
    ]
  },
  {
    "id": "高級混合強化秘藥(風暴)",
    "name": "高級混合強化秘藥(風暴)",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.4",
        "craftTime": 0,
        "outputQty": 2,
        "materials": [
          {
            "id": "高級強擊強化秘藥",
            "qty": 3
          },
          {
            "id": "高級廣域強化秘藥",
            "qty": 3
          },
          {
            "id": "強化祕藥乳化劑",
            "qty": 10
          },
          {
            "id": "生命的魔力石",
            "qty": 25
          },
          {
            "id": "遺忘的碎片",
            "qty": 60
          }
        ]
      }
    ]
  },
  {
    "id": "高級混合強化秘藥(怒濤)",
    "name": "高級混合強化秘藥(怒濤)",
    "category": "道具",
    "subcategory": "強化",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.4",
        "craftTime": 0,
        "outputQty": 2,
        "materials": [
          {
            "id": "高級連擊強化秘藥",
            "qty": 3
          },
          {
            "id": "高級廣域強化秘藥",
            "qty": 3
          },
          {
            "id": "強化祕藥乳化劑",
            "qty": 10
          },
          {
            "id": "生命的魔力石",
            "qty": 25
          },
          {
            "id": "野性的碎片",
            "qty": 60
          }
        ]
      }
    ]
  },
  {
    "id": "恢復藥水",
    "name": "恢復藥水",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "立即製作",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "血紅藥草",
            "qty": 2
          },
          {
            "id": "新芽蘑菇",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "繃帶",
    "name": "繃帶",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "立即製作",
        "craftTime": 0,
        "outputQty": 10,
        "materials": [
          {
            "id": "布料",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "自動恢復藥水",
    "name": "自動恢復藥水",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.1",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "恢復藥水",
            "qty": 5
          },
          {
            "id": "分解的裝備零件",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "高級恢復藥水",
    "name": "高級恢復藥水",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.1",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "血紅藥草",
            "qty": 6
          },
          {
            "id": "新芽蘑菇汁液",
            "qty": 5
          },
          {
            "id": "咻咻蘑菇",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "高級自動恢復藥水",
    "name": "高級自動恢復藥水",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.1",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "高級恢復藥水",
            "qty": 5
          },
          {
            "id": "分解的裝備零件",
            "qty": 10
          }
        ]
      }
    ]
  },
  {
    "id": "耐熱繃帶",
    "name": "耐熱繃帶",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.1",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "繃帶",
            "qty": 5
          },
          {
            "id": "壯壯蘑菇粉末",
            "qty": 3
          },
          {
            "id": "火苗結晶",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "防寒繃帶",
    "name": "防寒繃帶",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.1",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "繃帶",
            "qty": 5
          },
          {
            "id": "壯壯蘑菇粉末",
            "qty": 3
          },
          {
            "id": "冰霜結晶",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "絕緣繃帶",
    "name": "絕緣繃帶",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.1",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "繃帶",
            "qty": 5
          },
          {
            "id": "壯壯蘑菇粉末",
            "qty": 3
          },
          {
            "id": "電氣結晶",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "祝福繃帶",
    "name": "祝福繃帶",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.1",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "繃帶",
            "qty": 5
          },
          {
            "id": "壯壯蘑菇粉末",
            "qty": 3
          },
          {
            "id": "光輝結晶",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "封印繃帶",
    "name": "封印繃帶",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.1",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "繃帶",
            "qty": 5
          },
          {
            "id": "壯壯蘑菇粉末",
            "qty": 3
          },
          {
            "id": "封印結晶",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "最高級恢復藥水",
    "name": "最高級恢復藥水",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.2",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "血紅藥草",
            "qty": 12
          },
          {
            "id": "淨淨蘑菇",
            "qty": 6
          },
          {
            "id": "躲躲花",
            "qty": 6
          }
        ]
      }
    ]
  },
  {
    "id": "高級繃帶",
    "name": "高級繃帶",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.2",
        "craftTime": 0,
        "outputQty": 10,
        "materials": [
          {
            "id": "高級布料",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "最高自動恢復藥水",
    "name": "最高自動恢復藥水",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.2",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "最高級恢復藥水",
            "qty": 5
          },
          {
            "id": "分解的裝備零件",
            "qty": 60
          }
        ]
      }
    ]
  },
  {
    "id": "高級耐熱繃帶",
    "name": "高級耐熱繃帶",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.2",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "高級繃帶",
            "qty": 5
          },
          {
            "id": "躲躲花粉末",
            "qty": 6
          },
          {
            "id": "火苗結晶",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "高級防寒繃帶",
    "name": "高級防寒繃帶",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.2",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "高級繃帶",
            "qty": 5
          },
          {
            "id": "躲躲花粉末",
            "qty": 6
          },
          {
            "id": "冰霜結晶",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "高級絕緣繃帶",
    "name": "高級絕緣繃帶",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.2",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "高級繃帶",
            "qty": 5
          },
          {
            "id": "躲躲花粉末",
            "qty": 6
          },
          {
            "id": "電氣結晶",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "高級祝福繃帶",
    "name": "高級祝福繃帶",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.2",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "高級繃帶",
            "qty": 5
          },
          {
            "id": "躲躲花粉末",
            "qty": 6
          },
          {
            "id": "光輝結晶",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "高級封印繃帶",
    "name": "高級封印繃帶",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.2",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "高級繃帶",
            "qty": 5
          },
          {
            "id": "躲躲花粉末",
            "qty": 6
          },
          {
            "id": "封印結晶",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "卓越恢復藥水",
    "name": "卓越恢復藥水",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.3",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "血紅藥草",
            "qty": 16
          },
          {
            "id": "淨淨蘑菇汁液",
            "qty": 5
          },
          {
            "id": "生命的魔力石",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "卓越自動恢復藥水",
    "name": "卓越自動恢復藥水",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.3",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "卓越恢復藥水",
            "qty": 5
          },
          {
            "id": "分解的裝備零件",
            "qty": 120
          }
        ]
      }
    ]
  },
  {
    "id": "卓越繃帶",
    "name": "卓越繃帶",
    "category": "道具",
    "subcategory": "恢復",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.4",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "高級布料+",
            "qty": 5
          },
          {
            "id": "傷痕花粉末",
            "qty": 6
          },
          {
            "id": "火苗結晶",
            "qty": 10
          },
          {
            "id": "冰霜結晶",
            "qty": 10
          },
          {
            "id": "電氣結晶",
            "qty": 10
          },
          {
            "id": "光輝結晶",
            "qty": 10
          },
          {
            "id": "封印結晶",
            "qty": 10
          }
        ]
      }
    ]
  },
  {
    "id": "染色劑",
    "name": "染色劑",
    "category": "道具",
    "subcategory": "染色劑",
    "recipes": [
      {
        "processMethod": "藥品製作台Lv.1",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "裝水的瓶子",
            "qty": 3
          },
          {
            "id": "染色劑基底",
            "qty": 10
          }
        ]
      }
    ]
  },
  {
    "id": "擠著吃的點心",
    "name": "擠著吃的點心",
    "category": "道具",
    "subcategory": "其他食物",
    "recipes": [
      {
        "processMethod": "食物製作台Lv.1",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "肉",
            "qty": 3
          },
          {
            "id": "藥草",
            "qty": 1
          },
          {
            "id": "裝水的瓶子",
            "qty": 1
          }
        ]
      }
    ]
  },
  {
    "id": "魔法榴彈部件",
    "name": "魔法榴彈部件",
    "category": "道具",
    "subcategory": "魔法榴彈",
    "recipes": [
      {
        "processMethod": "多用途製作台Lv.3",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "分解的裝備零件",
            "qty": 50
          },
          {
            "id": "魔力藥草",
            "qty": 10
          },
          {
            "id": "峽谷的魔力石",
            "qty": 1
          },
          {
            "id": "煉金術碎屑",
            "qty": 50
          }
        ]
      }
    ]
  },
  {
    "id": "火焰魔法榴彈",
    "name": "火焰魔法榴彈",
    "category": "道具",
    "subcategory": "魔法榴彈",
    "recipes": [
      {
        "processMethod": "多用途製作台Lv.3",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "火苗結晶",
            "qty": 3
          },
          {
            "id": "魔法榴彈部件",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "閃電魔法榴彈",
    "name": "閃電魔法榴彈",
    "category": "道具",
    "subcategory": "魔法榴彈",
    "recipes": [
      {
        "processMethod": "多用途製作台Lv.3",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "電氣結晶",
            "qty": 3
          },
          {
            "id": "魔法榴彈部件",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "風魔法榴彈",
    "name": "風魔法榴彈",
    "category": "道具",
    "subcategory": "魔法榴彈",
    "recipes": [
      {
        "processMethod": "多用途製作台Lv.3",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "凝聚的風",
            "qty": 3
          },
          {
            "id": "魔法榴彈部件",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "酸蝕魔法榴彈",
    "name": "酸蝕魔法榴彈",
    "category": "道具",
    "subcategory": "魔法榴彈",
    "recipes": [
      {
        "processMethod": "多用途製作台Lv.3",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "毒囊",
            "qty": 3
          },
          {
            "id": "魔法榴彈部件",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "高級魔法榴彈部件",
    "name": "高級魔法榴彈部件",
    "category": "道具",
    "subcategory": "魔法榴彈",
    "recipes": [
      {
        "processMethod": "多用途製作台Lv.3",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "魔法榴彈部件",
            "qty": 5
          },
          {
            "id": "魔力起爆劑",
            "qty": 25
          },
          {
            "id": "峽谷的魔力石",
            "qty": 24
          },
          {
            "id": "煉金術碎屑",
            "qty": 100
          }
        ]
      },
      {
        "processMethod": "多用途製作台Lv.4",
        "craftTime": 0,
        "outputQty": 5,
        "materials": [
          {
            "id": "分解的裝備零件",
            "qty": 150
          },
          {
            "id": "魔力起爆劑",
            "qty": 15
          },
          {
            "id": "曠野的魔力石",
            "qty": 25
          },
          {
            "id": "煉金術碎屑",
            "qty": 50
          }
        ]
      }
    ]
  },
  {
    "id": "高級火焰魔法榴彈",
    "name": "高級火焰魔法榴彈",
    "category": "道具",
    "subcategory": "魔法榴彈",
    "recipes": [
      {
        "processMethod": "多用途製作台Lv.3",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "火苗結晶",
            "qty": 9
          },
          {
            "id": "高級魔法榴彈部件",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "高級閃電魔法榴彈",
    "name": "高級閃電魔法榴彈",
    "category": "道具",
    "subcategory": "魔法榴彈",
    "recipes": [
      {
        "processMethod": "多用途製作台Lv.3",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "電氣結晶",
            "qty": 9
          },
          {
            "id": "高級魔法榴彈部件",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "高級風魔法榴彈",
    "name": "高級風魔法榴彈",
    "category": "道具",
    "subcategory": "魔法榴彈",
    "recipes": [
      {
        "processMethod": "多用途製作台Lv.3",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "凝聚的風",
            "qty": 9
          },
          {
            "id": "高級魔法榴彈部件",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "高級酸蝕魔法榴彈",
    "name": "高級酸蝕魔法榴彈",
    "category": "道具",
    "subcategory": "魔法榴彈",
    "recipes": [
      {
        "processMethod": "多用途製作台Lv.3",
        "craftTime": 0,
        "outputQty": 3,
        "materials": [
          {
            "id": "毒囊",
            "qty": 9
          },
          {
            "id": "高級魔法榴彈部件",
            "qty": 3
          }
        ]
      }
    ]
  },
  {
    "id": "釘子",
    "name": "釘子",
    "category": "道具",
    "subcategory": "一般材料",
    "recipes": [
      {
        "processMethod": "多用途製作台Lv.1",
        "craftTime": 0,
        "outputQty": 10,
        "materials": [
          {
            "id": "鐵錠",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "營火套組",
    "name": "營火套組",
    "category": "道具",
    "subcategory": "營火",
    "recipes": [
      {
        "processMethod": "立即製作",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "樹枝",
            "qty": 5
          },
          {
            "id": "原木",
            "qty": 2
          }
        ]
      }
    ]
  },
  {
    "id": "熟練營火套組",
    "name": "熟練營火套組",
    "category": "道具",
    "subcategory": "營火",
    "recipes": [
      {
        "processMethod": "多用途製作台Lv.1",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "樹枝",
            "qty": 5
          },
          {
            "id": "高級原木",
            "qty": 4
          },
          {
            "id": "石塊",
            "qty": 10
          }
        ]
      }
    ]
  },
  {
    "id": "專業營火套組",
    "name": "專業營火套組",
    "category": "道具",
    "subcategory": "營火",
    "recipes": [
      {
        "processMethod": "多用途製作台Lv.2",
        "craftTime": 0,
        "outputQty": 1,
        "materials": [
          {
            "id": "樹枝",
            "qty": 5
          },
          {
            "id": "高級原木+",
            "qty": 4
          },
          {
            "id": "石塊",
            "qty": 10
          }
        ]
      }
    ]
  },
  {
    "id": "礦石",
    "name": "礦石",
    "category": "原料"
  },
  {
    "id": "鐵礦石",
    "name": "鐵礦石",
    "category": "原料"
  },
  {
    "id": "煤炭",
    "name": "煤炭",
    "category": "原料"
  },
  {
    "id": "銅礦石",
    "name": "銅礦石",
    "category": "原料"
  },
  {
    "id": "白銅礦石",
    "name": "白銅礦石",
    "category": "原料"
  },
  {
    "id": "銀礦石",
    "name": "銀礦石",
    "category": "原料"
  },
  {
    "id": "原木",
    "name": "原木",
    "category": "原料"
  },
  {
    "id": "樹液",
    "name": "樹液",
    "category": "原料"
  },
  {
    "id": "高級原木",
    "name": "高級原木",
    "category": "原料"
  },
  {
    "id": "高級原木+",
    "name": "高級原木+",
    "category": "原料"
  },
  {
    "id": "最高級原木",
    "name": "最高級原木",
    "category": "原料"
  },
  {
    "id": "樹枝",
    "name": "樹枝",
    "category": "原料"
  },
  {
    "id": "生皮",
    "name": "生皮",
    "category": "原料"
  },
  {
    "id": "高級生皮",
    "name": "高級生皮",
    "category": "原料"
  },
  {
    "id": "高級生皮+",
    "name": "高級生皮+",
    "category": "原料"
  },
  {
    "id": "最高級生皮",
    "name": "最高級生皮",
    "category": "原料"
  },
  {
    "id": "羊毛",
    "name": "羊毛",
    "category": "原料"
  },
  {
    "id": "高級羊毛",
    "name": "高級羊毛",
    "category": "原料"
  },
  {
    "id": "高級羊毛+",
    "name": "高級羊毛+",
    "category": "原料"
  },
  {
    "id": "最高級羊毛",
    "name": "最高級羊毛",
    "category": "原料"
  },
  {
    "id": "蜘蛛網",
    "name": "蜘蛛網",
    "category": "原料"
  },
  {
    "id": "最高級蜘蛛網",
    "name": "最高級蜘蛛網",
    "category": "原料"
  },
  {
    "id": "新芽蘑菇",
    "name": "新芽蘑菇",
    "category": "原料"
  },
  {
    "id": "紙",
    "name": "紙",
    "category": "原料"
  },
  {
    "id": "裝水的瓶子",
    "name": "裝水的瓶子",
    "category": "原料"
  },
  {
    "id": "壯壯蘑菇",
    "name": "壯壯蘑菇",
    "category": "原料"
  },
  {
    "id": "咻咻蘑菇",
    "name": "咻咻蘑菇",
    "category": "原料"
  },
  {
    "id": "淨淨蘑菇",
    "name": "淨淨蘑菇",
    "category": "原料"
  },
  {
    "id": "增幅蘑菇",
    "name": "增幅蘑菇",
    "category": "原料"
  },
  {
    "id": "躲躲花",
    "name": "躲躲花",
    "category": "原料"
  },
  {
    "id": "傷痕花",
    "name": "傷痕花",
    "category": "原料"
  },
  {
    "id": "幽靈螢火蟲",
    "name": "幽靈螢火蟲",
    "category": "原料"
  },
  {
    "id": "魔力藥草",
    "name": "魔力藥草",
    "category": "原料"
  },
  {
    "id": "黏土",
    "name": "黏土",
    "category": "原料"
  },
  {
    "id": "夕陽蝴蝶",
    "name": "夕陽蝴蝶",
    "category": "原料"
  },
  {
    "id": "白雙金龜子",
    "name": "白雙金龜子",
    "category": "原料"
  },
  {
    "id": "落葉蛾",
    "name": "落葉蛾",
    "category": "原料"
  },
  {
    "id": "蘊含魔力的石頭",
    "name": "蘊含魔力的石頭",
    "category": "原料"
  },
  {
    "id": "閃閃發亮的苔蘚",
    "name": "閃閃發亮的苔蘚",
    "category": "原料"
  },
  {
    "id": "憤怒的碎片",
    "name": "憤怒的碎片",
    "category": "原料"
  },
  {
    "id": "封印結晶",
    "name": "封印結晶",
    "category": "原料"
  },
  {
    "id": "遺忘的碎片",
    "name": "遺忘的碎片",
    "category": "原料"
  },
  {
    "id": "野性的碎片",
    "name": "野性的碎片",
    "category": "原料"
  },
  {
    "id": "雞蛋",
    "name": "雞蛋",
    "category": "原料"
  },
  {
    "id": "食用油",
    "name": "食用油",
    "category": "原料"
  },
  {
    "id": "小麥",
    "name": "小麥",
    "category": "原料"
  },
  {
    "id": "牛奶",
    "name": "牛奶",
    "category": "原料"
  },
  {
    "id": "鹽",
    "name": "鹽",
    "category": "原料"
  },
  {
    "id": "糖",
    "name": "糖",
    "category": "原料"
  },
  {
    "id": "黃豆",
    "name": "黃豆",
    "category": "原料"
  },
  {
    "id": "大塊肉",
    "name": "大塊肉",
    "category": "原料"
  },
  {
    "id": "藥草",
    "name": "藥草",
    "category": "原料"
  },
  {
    "id": "大蒜",
    "name": "大蒜",
    "category": "原料"
  },
  {
    "id": "胡椒",
    "name": "胡椒",
    "category": "原料"
  },
  {
    "id": "肉",
    "name": "肉",
    "category": "原料"
  },
  {
    "id": "高麗菜",
    "name": "高麗菜",
    "category": "原料"
  },
  {
    "id": "馬鈴薯",
    "name": "馬鈴薯",
    "category": "原料"
  },
  {
    "id": "貝類",
    "name": "貝類",
    "category": "原料"
  },
  {
    "id": "檸檬",
    "name": "檸檬",
    "category": "原料"
  },
  {
    "id": "清淡的肉",
    "name": "清淡的肉",
    "category": "原料"
  },
  {
    "id": "番茄",
    "name": "番茄",
    "category": "原料"
  },
  {
    "id": "洋蔥",
    "name": "洋蔥",
    "category": "原料"
  },
  {
    "id": "防風草",
    "name": "防風草",
    "category": "原料"
  },
  {
    "id": "白蘿蔔",
    "name": "白蘿蔔",
    "category": "原料"
  },
  {
    "id": "蘋果",
    "name": "蘋果",
    "category": "原料"
  },
  {
    "id": "玉米",
    "name": "玉米",
    "category": "原料"
  },
  {
    "id": "冰",
    "name": "冰",
    "category": "原料"
  },
  {
    "id": "草莓",
    "name": "草莓",
    "category": "原料"
  },
  {
    "id": "布雷夫尼鯉魚",
    "name": "布雷夫尼鯉魚",
    "category": "原料"
  },
  {
    "id": "銀鯽魚",
    "name": "銀鯽魚",
    "category": "原料"
  },
  {
    "id": "彩虹鱒魚",
    "name": "彩虹鱒魚",
    "category": "原料"
  },
  {
    "id": "香魚",
    "name": "香魚",
    "category": "原料"
  },
  {
    "id": "鯖魚",
    "name": "鯖魚",
    "category": "原料"
  },
  {
    "id": "鮭魚",
    "name": "鮭魚",
    "category": "原料"
  },
  {
    "id": "蘆筍",
    "name": "蘆筍",
    "category": "原料"
  },
  {
    "id": "鯰魚",
    "name": "鯰魚",
    "category": "原料"
  },
  {
    "id": "豌豆",
    "name": "豌豆",
    "category": "原料"
  },
  {
    "id": "鱸魚",
    "name": "鱸魚",
    "category": "原料"
  },
  {
    "id": "辣椒粉",
    "name": "辣椒粉",
    "category": "原料"
  },
  {
    "id": "盛宴材料：不滅之火",
    "name": "盛宴材料：不滅之火",
    "category": "原料"
  },
  {
    "id": "厚實的馬鈴薯",
    "name": "厚實的馬鈴薯",
    "category": "原料"
  },
  {
    "id": "四葉草",
    "name": "四葉草",
    "category": "原料"
  },
  {
    "id": "錢幣瓢蟲",
    "name": "錢幣瓢蟲",
    "category": "原料"
  },
  {
    "id": "煉金術碎屑",
    "name": "煉金術碎屑",
    "category": "原料"
  },
  {
    "id": "毅力草",
    "name": "毅力草",
    "category": "原料"
  },
  {
    "id": "白花蝶",
    "name": "白花蝶",
    "category": "原料"
  },
  {
    "id": "血紅藥草",
    "name": "血紅藥草",
    "category": "原料"
  },
  {
    "id": "獨角仙",
    "name": "獨角仙",
    "category": "原料"
  },
  {
    "id": "箭花",
    "name": "箭花",
    "category": "原料"
  },
  {
    "id": "滴答螢火蟲",
    "name": "滴答螢火蟲",
    "category": "原料"
  },
  {
    "id": "廢墟的魔力石",
    "name": "廢墟的魔力石",
    "category": "原料"
  },
  {
    "id": "礦山的魔力石",
    "name": "礦山的魔力石",
    "category": "原料"
  },
  {
    "id": "強化祕藥乳化劑",
    "name": "強化祕藥乳化劑",
    "category": "原料"
  },
  {
    "id": "生命的魔力石",
    "name": "生命的魔力石",
    "category": "原料"
  },
  {
    "id": "分解的裝備零件",
    "name": "分解的裝備零件",
    "category": "原料"
  },
  {
    "id": "染色劑基底",
    "name": "染色劑基底",
    "category": "原料"
  },
  {
    "id": "峽谷的魔力石",
    "name": "峽谷的魔力石",
    "category": "原料"
  },
  {
    "id": "凝聚的風",
    "name": "凝聚的風",
    "category": "原料"
  },
  {
    "id": "毒囊",
    "name": "毒囊",
    "category": "原料"
  },
  {
    "id": "曠野的魔力石",
    "name": "曠野的魔力石",
    "category": "原料"
  },
  {
    "id": "石塊",
    "name": "石塊",
    "category": "原料"
  }
];
