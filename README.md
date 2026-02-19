# Daily Practice - 使用指南

这个仓库用于记录我在 Codewars 上的每日编程练习。

## 📁 目录结构

```
daily_practice/
├── README.md              # 项目说明
├── .gitignore            # Git忽略配置
├── auto_submit.py        # 自动提交工具（完整模式）
├── quick_submit.py       # 快速提交工具（简化模式）
├── super_submit.py       # 终极自动化工具（推荐）
├── submit_daily.sh       # Bash脚本提交
└── solutions/            # 解题记录
    └── YYYY-MM-DD/       # 按日期组织
        ├── problem_name.js
        └── README.md
```

## 🚀 使用方法

### 方法1: 完整模式（推荐新手）

运行交互式脚本，逐步输入信息：

```bash
cd daily_practice
python3 auto_submit.py
```

会引导你输入：

- 题目名称
- 题目链接
- 难度等级
- 题目描述
- 解题代码
- 解题思路（可选）

然后自动提交到GitHub。

### 方法2: 快速模式（推荐熟练后使用）

```bash
python3 quick_submit.py
```

两种输入方式：

1. **粘贴代码文件路径** - 如果你已经在本地写好代码
2. **直接粘贴代码** - 从Codewars复制代码后直接粘贴

**小技巧**：在代码开头添加注释，可以自动识别信息：

```python
"""
Problem: two_sum
URL: https://www.codewars.com/kata/xxxxx
Difficulty: 6kyu
"""

def two_sum(numbers, target):
    # your solution
    pass
```

### 方法3: Bash脚本（适合命令行爱好者）

```bash
./submit_daily.sh "problem_name" "/path/to/solution.py"
```

## 💡 推荐工作流程

### 初学者工作流程：

1. 在Codewars上解题
2. 复制你的解题代码
3. 运行 `python3 auto_submit.py`
4. 按提示粘贴代码和填写信息
5. 确认后自动提交到GitHub ✅

### 进阶工作流程：

1. 在本地IDE写代码，开头添加题目信息注释
2. 在Codewars验证通过
3. 运行 `python3 quick_submit.py`
4. 选择粘贴文件路径，回车确认 ✅

## 🔧 全自动化方案（未来扩展）

如果想要完全自动化，可以考虑：

1. **浏览器扩展** - 在Codewars页面一键提交
2. **API集成** - 使用Codewars API自动获取题目信息
3. **GitHub Actions** - 定时同步和统计
4. **VS Code插件** - 在编辑器内直接提交

这些需要额外开发，当前的Python脚本已经能满足日常使用。

## 📊 进度追踪

- **Total problems solved:** 8
- **Current streak:** 7 days
- **Last updated:** 2026-02-18

## 📈 难度分布

| 难度 | 数量 |
| ---- | ---- |
| 8kyu | 1    |
| 7kyu | 2    |
| 6kyu | 4    |
| 5kyu | 0    |
| 4kyu | 0    |

---

Happy Coding! 💪
