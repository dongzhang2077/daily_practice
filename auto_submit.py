#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Codewars Daily Practice Auto Submit Tool
自动提交每日练习到GitHub
"""

import os
import subprocess
from datetime import datetime


def run_command(cmd, cwd=None):
    """执行shell命令"""
    result = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True)
    return result.returncode == 0, result.stdout, result.stderr


def get_multiline_input(prompt):
    """获取多行输入（代码或描述）"""
    print(f"\n{prompt}")
    print("(输入完成后，单独一行输入 END 结束)")
    lines = []
    while True:
        line = input()
        if line.strip() == "END":
            break
        lines.append(line)
    return "\n".join(lines)


def main():
    print("=" * 60)
    print("Codewars Daily Practice - Auto Submit Tool")
    print("=" * 60)
    
    # 获取题目信息
    problem_name = input("\n题目名称（英文，用下划线分隔）: ").strip()
    problem_url = input("题目链接（Codewars URL）: ").strip()
    difficulty = input("难度等级（如 6kyu, 7kyu）: ").strip()
    
    # 获取题目描述
    problem_description = get_multiline_input("题目描述（中文或英文）:")
    
    # 获取解题代码
    solution_code = get_multiline_input("你的解题代码:")
    
    # 获取解题思路（可选）
    print("\n解题思路/笔记（可选，直接回车跳过）:")
    notes = input().strip()
    
    # 创建目录结构
    today = datetime.now().strftime("%Y-%m-%d")
    solution_dir = f"solutions/{today}"
    os.makedirs(solution_dir, exist_ok=True)
    
    # 写入解题代码
    solution_file = f"{solution_dir}/{problem_name}.py"
    with open(solution_file, 'w', encoding='utf-8') as f:
        f.write(f'"""\n')
        f.write(f'Problem: {problem_name}\n')
        f.write(f'Difficulty: {difficulty}\n')
        f.write(f'URL: {problem_url}\n')
        f.write(f'Date: {today}\n')
        f.write(f'"""\n\n')
        f.write(solution_code)
    
    # 创建README
    readme_file = f"{solution_dir}/README.md"
    with open(readme_file, 'w', encoding='utf-8') as f:
        f.write(f"# {problem_name}\n\n")
        f.write(f"**Difficulty:** {difficulty}  \n")
        f.write(f"**Solved on:** {today}  \n")
        f.write(f"**URL:** {problem_url}\n\n")
        f.write(f"## Problem Description\n\n")
        f.write(problem_description)
        f.write(f"\n\n## Solution\n\n")
        f.write(f"```python\n{solution_code}\n```\n")
        if notes:
            f.write(f"\n## Notes\n\n{notes}\n")
    
    print(f"\n✓ 文件已创建:")
    print(f"  - {solution_file}")
    print(f"  - {readme_file}")
    
    # Git提交
    commit_message = f"Add solution: {problem_name} ({difficulty}) - {today}"
    
    print(f"\n准备提交到Git...")
    print(f"Commit message: {commit_message}")
    
    confirm = input("\n确认提交并推送到GitHub? (y/n): ").strip().lower()
    if confirm != 'y':
        print("已取消提交。文件已保存在本地。")
        return
    
    # 执行git命令
    success, stdout, stderr = run_command("git add .")
    if not success:
        print(f"❌ Git add 失败: {stderr}")
        return
    
    success, stdout, stderr = run_command(f'git commit -m "{commit_message}"')
    if not success:
        print(f"❌ Git commit 失败: {stderr}")
        return
    
    success, stdout, stderr = run_command("git push origin main")
    if not success:
        print(f"❌ Git push 失败: {stderr}")
        return
    
    print("\n" + "=" * 60)
    print("✓ 成功提交到GitHub!")
    print("=" * 60)
    print(f"查看: https://github.com/dongzhang2077/daily_practice")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n操作已取消。")
    except Exception as e:
        print(f"\n❌ 错误: {e}")
