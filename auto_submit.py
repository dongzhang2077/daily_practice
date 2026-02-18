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
    """执行shell命令（通过 wsl 运行以支持 UNC 路径）"""
    result = subprocess.run(
        ["wsl", "bash", "-c", cmd],
        capture_output=True, text=True, encoding="utf-8"
    )
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
    language = input("语言（js/py，直接回车默认 js）: ").strip().lower() or "js"
    ext = "js" if language in ("js", "javascript") else language
    
    # 获取解题代码
    solution_code = get_multiline_input("你的解题代码:")
    
    # 创建目录结构
    today = datetime.now().strftime("%Y-%m-%d")
    solution_dir = f"solutions/{today}"
    os.makedirs(solution_dir, exist_ok=True)
    
    # 写入解题代码
    solution_file = f"{solution_dir}/{problem_name}.{ext}"
    with open(solution_file, 'w', encoding='utf-8') as f:
        if ext == "js":
            f.write(f'/*\n')
            f.write(f'Problem: {problem_name}\n')
            f.write(f'Difficulty: {difficulty}\n')
            f.write(f'URL: {problem_url}\n')
            f.write(f'Date: {today}\n')
            f.write(f'*/\n\n')
        else:
            f.write(f'"""\n')
            f.write(f'Problem: {problem_name}\n')
            f.write(f'Difficulty: {difficulty}\n')
            f.write(f'URL: {problem_url}\n')
            f.write(f'Date: {today}\n')
            f.write(f'"""\n\n')
        f.write(solution_code)
    
    print(f"\n✓ 文件已创建: {solution_file}")
    
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
