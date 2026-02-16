# AGENTS.md

## Project Overview

Codewars daily coding practice tracker. Python scripts automate submitting solutions to GitHub.
Solutions are organized by date under `solutions/YYYY-MM-DD/`. Automation scripts live at repo root.

**Repository:** https://github.com/dongzhang2077/daily_practice
**Branch:** main

## Directory Structure

```
daily_practice/
├── auto_submit.py        # Interactive submission (full mode)
├── quick_submit.py       # Streamlined submission
├── super_submit.py       # Recommended: smartest submission tool
├── submit_daily.sh       # Bash submission alternative
├── config.json           # GitHub + preferences config
├── solutions/
│   └── YYYY-MM-DD/
│       └── problem_name.js   # Solution file (with inline comments)
```

**Note:** Daily README files are NO LONGER created. Keep it simple - all notes, thoughts, and learning points go directly in the solution file as English comments.

## Build / Lint / Test Commands

No formal build system, linter, or test suite exists.

```bash
# Run any Python script directly
python3 super_submit.py
python3 auto_submit.py
python3 quick_submit.py

# Bash submission
./submit_daily.sh "problem_name" "/path/to/solution.py"

# Verify a JS solution manually
node solutions/2026-02-13/duplicate_encoder.js
```

**Runtime versions:** Python 3.12, Node 20.x

There are no `package.json`, `pyproject.toml`, or any dependency management files.
The only optional dependency is `pyperclip` (for clipboard support in super_submit.py).

## Git Conventions

**Commit message format:**
```
Add solution: {problem_name} ({difficulty}) - {YYYY-MM-DD}
```

Example: `Add solution: duplicate_encoder (6kyu) - 2026-02-13`

**Workflow:** Scripts run `git add . && git commit && git push origin main`.
Config `auto_push: true` in config.json skips confirmation prompts.

## Code Style — Python Scripts

### File Headers
Every Python file starts with shebang + encoding + module docstring:
```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Module Title - Brief description
详细说明（Chinese is acceptable）
"""
```

### Imports
Standard library only. Ordered: `os`, `re`, `json`, `sys`, `subprocess`, `datetime`, `pathlib`.
No third-party packages except optional `pyperclip`.

### Naming
- **Functions/variables:** `snake_case` — `run_command`, `extract_info_from_code`
- **Classes:** `PascalCase` — `DailyPracticeSubmitter`
- **Constants:** Inline, no separate constants file

### Patterns
- `subprocess.run()` with `shell=True, capture_output=True, text=True` for shell commands
- Return tuple `(success: bool, stdout: str, stderr: str)` from command helpers
- `os.makedirs(dir, exist_ok=True)` for directory creation
- `open(path, 'r', encoding='utf-8')` — always specify UTF-8
- `datetime.now().strftime("%Y-%m-%d")` for date strings

### Error Handling
- Top-level `try/except` with `KeyboardInterrupt` and generic `Exception`
- Print errors with emoji prefix: `❌ 错误: {e}`
- `sys.exit(1)` on fatal errors within functions
- No custom exception classes

### Comments and Docstrings
- Docstrings in Chinese: `"""加载配置文件"""`
- Inline comments mix Chinese and English
- User-facing print messages use Chinese with emoji prefixes: ✓, ❌, ✅, 📝, 🚀

## Code Style — JavaScript Solutions

### File Structure
Each solution file follows this template:
```javascript
/*
Problem: problem_name
Difficulty: 6kyu
Date: YYYY-MM-DD
URL: https://www.codewars.com/kata/...

Description:
Brief problem description here
*/

// My Solution
function solutionName(args) {
    // Add inline English comments explaining approach and key learnings
    // Example: Use destructuring to extract values cleanly
    // Key learning: Array.reduce() with destructured parameters
    // implementation
}

// Reference: Better Solution (optional)
/*
function solutionName(args) {
    // alternative approach
}
*/

// Test cases (if applicable)
const chai = require("chai");
const assert = chai.assert;
// ... test code
```

**Important:** All thoughts, algorithm explanations, and learning points should be in **English comments** within the code. Do NOT create separate README.md files for daily solutions.

### Naming
- **Functions:** `camelCase` — `duplicateEncode`, `isUndefined`
- **Variables:** `camelCase` — `let output`, `const dict`
- **Problem files:** `snake_case.js` — `duplicate_encoder.js`

### Formatting
- 4-space indentation in solution code
- Opening brace on same line: `function foo() {`
- Spaces around operators: `dict[c] === 1`
- Single quotes for strings
- No semicolons is acceptable (mixed usage observed)

### Patterns
- `===` strict equality (never `==`)
- `let` for mutable, `const` for immutable
- `.split('').forEach()` for character iteration
- **Comments in English** - explain algorithm approach, key learnings, and insights directly in code
- Prefer concise inline comments over verbose documentation

## Config (config.json)

```json
{
  "github": { "username": "dongzhang2077", "repo": "daily_practice", "branch": "main" },
  "preferences": { "auto_push": true, "create_readme": true, "language": "zh-CN" }
}
```

Do not hardcode GitHub credentials. Read from config.json at runtime.

## Important Notes for Agents

1. **Language:** User interface and documentation are in Chinese (zh-CN). Maintain this.
2. **No daily README files:** Do NOT create `solutions/YYYY-MM-DD/README.md`. All notes, thoughts, and learning points go directly in the solution file as **English comments**.
3. **No tests exist.** Validate solutions manually with `node` if needed.
4. **No linter/formatter configured.** Match existing style by reading adjacent files.
5. **Solutions can be JS or Python** — file extension in scripts defaults to `.py` but actual solutions use `.js`. Respect the language used.
6. **Dates matter.** Solutions are organized by `YYYY-MM-DD`. Use `datetime.now()` or `date +%Y-%m-%d`.
7. **Don't break auto_push.** The scripts auto-commit and push. Be careful with `git add .` scope.
8. **Keep it simple.** This is a personal practice repo — no CI/CD, no complex tooling. Prefer concise inline comments over separate documentation.
