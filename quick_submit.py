#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Quick Submit - 快速提交模式
只需粘贴代码文件路径，自动提取信息并提交
"""

import os
import re
import subprocess
from datetime import datetime


def run_command(cmd):
    """执行shell命令"""
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    return result.returncode == 0, result.stdout, result.stderr


def extract_problem_info(code_content):
    """从代码注释中提取题目信息"""
    info = {
        'name': '',
        'url': '',
        'difficulty': '',
        'description': ''
    }
    
    # 尝试从注释中提取信息
    lines = code_content.split('\n')
    for line in lines[:20]:  # 只看前20行
        if 'problem:' in line.lower() or '题目:' in line:
            info['name'] = re.sub(r'[#*\s]*(problem|题目)[:\s]*', '', line, flags=re.I).strip()
        if 'url:' in line.lower() or '链接:' in line:
            info['url'] = re.sub(r'[#*\s]*(url|链接)[:\s]*', '', line, flags=re.I).strip()
        if 'difficulty:' in line.lower() or '难度:' in line:
            info['difficulty'] = re.sub(r'[#*\s]*(difficulty|难度)[:\s]*', '', line, flags=re.I).strip()
    
    return info


def main():
    print("=" * 60)
    print("Quick Submit - 快速提交模式")
    print("=" * 60)
    print("\n提示: 在代码开头添加注释可以自动识别信息，格式如下:")
    print('''
"""
Problem: two_sum
URL: https://www.codewars.com/kata/xxxxx
Difficulty: 6kyu
"""
    ''')
    
    # 选择输入方式
    print("\n选择输入方式:")
    print("1. 粘贴代码文件路径")
    print("2. 直接粘贴代码")
    choice = input("请选择 (1/2): ").strip()
    
    code_content = ""
    
    if choice == "1":
        file_path = input("\n请输入代码文件路径: ").strip().strip('"').strip("'")
        if not os.path.exists(file_path):
            print(f"❌ 文件不存在: {file_path}")
            return
        with open(file_path, 'r', encoding='utf-8') as f:
            code_content = f.read()
    else:
        print("\n请粘贴代码（完成后单独一行输入 END）:")
        lines = []
        while True:
            line = input()
            if line.strip() == "END":
                break
            lines.append(line)
        code_content = "\n".join(lines)
    
    # 提取信息
    info = extract_problem_info(code_content)
    
    # 补充缺失信息
    if not info['name']:
        info['name'] = input("\n题目名称（英文，用下划线）: ").strip()
    else:
        confirm = input(f"\n题目名称: {info['name']} (直接回车确认，或输入新名称): ").strip()
        if confirm:
            info['name'] = confirm
    
    if not info['difficulty']:
        info['difficulty'] = input("难度等级（如 6kyu）: ").strip()
    else:
        confirm = input(f"难度等级: {info['difficulty']} (直接回车确认，或输入新等级): ").strip()
        if confirm:
            info['difficulty'] = confirm
    
    if not info['url']:
        info['url'] = input("题目链接（可选，直接回车跳过）: ").strip()
    
    # 创建文件
    today = datetime.now().strftime("%Y-%m-%d")
    solution_dir = f"solutions/{today}"
    os.makedirs(solution_dir, exist_ok=True)
    
    solution_file = f"{solution_dir}/{info['name']}.py"
    with open(solution_file, 'w', encoding='utf-8') as f:
        f.write(code_content)
    
    readme_file = f"{solution_dir}/README.md"
    with open(readme_file, 'w', encoding='utf-8') as f:
        f.write(f"# {info['name']}\n\n")
        f.write(f"**Difficulty:** {info['difficulty']}  \n")
        f.write(f"**Solved on:** {today}  \n")
        if info['url']:
            f.write(f"**URL:** {info['url']}\n\n")
        f.write(f"\n## Solution\n\n")
        f.write(f"```python\n{code_content}\n```\n")
    
    print(f"\n✓ 文件已创建在: {solution_dir}/")
    
    # Git提交
    commit_message = f"Add solution: {info['name']} ({info['difficulty']}) - {today}"
    
    confirm = input(f"\n提交消息: {commit_message}\n确认提交? (y/n): ").strip().lower()
    if confirm != 'y':
        print("已取消。")
        return
    
    run_command("git add .")
    run_command(f'git commit -m "{commit_message}"')
    success, stdout, stderr = run_command("git push origin main")
    
    if success:
        print("\n✓ 成功提交到GitHub!")
    else:
        print(f"\n❌ 推送失败: {stderr}")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n已取消。")
    except Exception as e:
        print(f"\n❌ 错误: {e}")
