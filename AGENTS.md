# AGENTS.md

## Project Overview

Codewars daily coding practice tracker. Python scripts automate submitting solutions to GitHub.
Solutions are organized by date under `solutions/YYYY-MM-DD/`. Automation scripts live at repo root.

**Repository:** https://github.com/dongzhang2077/daily_practice
**Branch:** main

## Long-Term Coding Coaching

- Before assigning rehabilitation tasks, read `LEARNING_GUIDE.md`, `LEARNER_STATE.md`, the latest one or two dated files in `practice-logs/`, and the relevant learner code. These files are the continuity record, not a claim of automatic cross-chat memory.
- The learner owns problem solving, implementation, debugging, and decisions. AI designs bounded tasks, offers graduated help, reviews, verifies, and maintains concise learning records. Do not write or repair the target implementation unless the learner explicitly requests it.
- The learner chooses the session budget. Default to a five-minute task when no preference is given; offer 10–15-minute combination tasks or 30–60-minute small-feature sessions when requested. Honor a clear request to continue or change the budget without a redundant approval step. AI must not increase time or task scope on its own.
- Match task scope to the chosen budget and available evidence. A longer session is not an obligation or a higher skill grade; returning to five minutes next time remains valid. Preserve the learner's ownership of core problem decomposition and implementation in all modes.
- Follow the coaching workflow and evidence rules in `LEARNING_GUIDE.md`. Update `LEARNER_STATE.md` only when new evidence warrants a change; keep dated session details in `practice-logs/`.
- The learner's current instructions take precedence over these documents. Keep guidance and evidence records consistent when preferences change.

## Directory Structure

```
daily_practice/
├── super_submit.py       # Only submission tool used
├── config.json           # GitHub + preferences config
├── practice-logs/        # Dated coding rehabilitation logs and AI handoff notes
├── solutions/
│   └── YYYY-MM-DD/
│       └── problem_name.js   # Solution file (with inline comments)
```

**Note:** Do not create daily README files under `solutions/`. Keep code-specific explanations in English comments. Coding rehabilitation session logs belong in `practice-logs/YYYY-MM-DD.md` and may be written in Chinese.

## Coding Rehabilitation Practice Logs

- Store session summaries in `practice-logs/YYYY-MM-DD.md`; append multiple sessions on the same day to the same file.
- After a completed practice session has been reviewed, draft or update the dated log from the actual conversation, code, and verification results as the learner's standing preference. Do not require a new request or add administrative writing work to the learner's session. If the learner is still working, record outcomes as pending rather than completed.
- Record the chosen budget, reported actual time if available, task, main observation point, code location, demonstrated behavior, references/help used, concepts clarified, verification results, and one next assessment point. Distinguish main observations from incidental evidence across reasoning, implementation, debugging, and verification; do not force every session to cover all four. Include at most two candidate flashcards when useful.
- Distinguish learner implementations, AI reference implementations, user-reported actions, and agent-verified results. Do not infer independent mastery from reference code or claim a push or time limit was verified when it was not.
- Preserve unresolved failures in the log; do not silently fix learner code or convert uncertain outcomes into successes.
- Logs are not full chat transcripts. Use them with the linked code when handing off to another AI. Do not invent session dates or retrospectively mark skills as mastered.
- Do not automatically commit or push logs. Use scoped staging if the learner asks to commit them.

## Build / Lint / Test Commands

No formal build system, linter, or test suite exists.

```bash
# Submit a solution
python3 super_submit.py

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

**Workflow:** `super_submit.py` saves the solution file, auto-updates README stats, then runs `git add . && git commit` (with confirmation prompt). Push is done manually afterwards: `git push origin main`.

**README auto-update:** `super_submit.py` scans `solutions/` after each submission and writes total count and difficulty distribution into the `<!-- STATS_START/END -->` and `<!-- DIFFICULTY_START/END -->` blocks in README.md.

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

**Important:** Keep code-specific algorithm explanations in **English comments** within the code. Put broader coding rehabilitation reflections and AI handoff summaries in `practice-logs/` (Chinese is allowed). Do NOT create separate README.md files for daily solutions.

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
2. **No daily solution README files:** Do NOT create `solutions/YYYY-MM-DD/README.md`. Keep code-specific explanations in English comments; store coding rehabilitation session logs in `practice-logs/YYYY-MM-DD.md`.
3. **No tests exist.** Validate solutions manually with `node` if needed.
4. **No linter/formatter configured.** Match existing style by reading adjacent files.
5. **Solutions can be JS or Python** — file extension in scripts defaults to `.py` but actual solutions use `.js`. Respect the language used.
6. **Dates matter.** Solutions are organized by `YYYY-MM-DD`. Use `datetime.now()` or `date +%Y-%m-%d`.
7. **No auto-push.** Scripts only `git add` and `git commit`. User pushes manually. Be careful with `git add .` scope.
8. **Keep it simple.** This is a personal practice repo — no CI/CD, no complex tooling. Use concise inline comments for code and concise dated files in `practice-logs/` for rehabilitation session summaries.
