# Daily Practice - 使用指南

这个仓库用于记录我在 Codewars 上的每日编程练习。

## 📁 目录结构

```
daily_practice/
├── README.md              # 项目说明
├── .gitignore             # Git忽略配置
├── super_submit.py        # 提交工具（推荐）
└── solutions/             # 解题记录
    └── YYYY-MM-DD/        # 按日期组织
        └── problem_name.js
```

## 🚀 使用方法

运行提交脚本，支持三种输入方式：

```bash
cd daily_practice
python3 super_submit.py
```

选项：

1. **从文件路径读取** - 已在本地写好代码时使用
2. **直接粘贴代码** - 从 Codewars 复制后粘贴
3. **从剪贴板读取** - 需要安装 `pyperclip`

**小技巧**：在代码开头添加注释，工具会自动识别题目信息：

```javascript
/*
Problem: two_sum
URL: https://www.codewars.com/kata/xxxxx
Difficulty: 6kyu
Date: 2026-02-22
*/
```

提交后自动 `git commit + push`，无需手动操作。

## 📊 进度追踪

<!-- STATS_START -->
- **Total problems solved:** 13
- **Last updated:** 2026-02-22
<!-- STATS_END -->

## 📈 难度分布

<!-- DIFFICULTY_START -->
| 难度 | 数量 |
| ---- | ---- |
| 8kyu | 2    |
| 7kyu | 3    |
| 6kyu | 7    |
| 5kyu | 1    |
<!-- DIFFICULTY_END -->

---

Happy Coding! 💪
