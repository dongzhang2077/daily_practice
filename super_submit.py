#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Super Auto Submit - 终极自动化版本
支持多种输入方式和智能识别
"""

import os
import re
import json
import sys
import subprocess
from datetime import datetime
from pathlib import Path


class DailyPracticeSubmitter:
    def __init__(self):
        self.config = self.load_config()
        self.today = datetime.now().strftime("%Y-%m-%d")
        self.solution_dir = f"solutions/{self.today}"
        
    def load_config(self):
        """加载配置文件"""
        config_file = "config.json"
        if os.path.exists(config_file):
            with open(config_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        return {}
    
    def run_command(self, cmd):
        """执行shell命令"""
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        return result.returncode == 0, result.stdout, result.stderr
    
    def extract_info_from_code(self, code):
        """智能提取代码中的信息"""
        info = {
            'name': '',
            'url': '',
            'difficulty': '',
            'description': ''
        }
        
        lines = code.split('\n')
        in_docstring = False
        docstring_content = []
        
        for i, line in enumerate(lines[:30]):
            stripped = line.strip()
            
            # 检测文档字符串
            if '"""' in stripped or "'''" in stripped:
                in_docstring = not in_docstring
                if not in_docstring and docstring_content:
                    break
                continue
            
            if in_docstring:
                docstring_content.append(stripped)
            
            # 提取关键信息
            line_lower = stripped.lower()
            if any(keyword in line_lower for keyword in ['problem:', '题目:', 'title:']):
                info['name'] = re.sub(r'[#*\s]*(problem|题目|title)[:\s]*', '', stripped, flags=re.I).strip()
            if any(keyword in line_lower for keyword in ['url:', '链接:', 'link:']):
                info['url'] = re.sub(r'[#*\s]*(url|链接|link)[:\s]*', '', stripped, flags=re.I).strip()
            if any(keyword in line_lower for keyword in ['difficulty:', '难度:', 'level:']):
                info['difficulty'] = re.sub(r'[#*\s]*(difficulty|难度|level)[:\s]*', '', stripped, flags=re.I).strip()
        
        # 如果有文档字符串，将其作为描述
        if docstring_content:
            info['description'] = '\n'.join(docstring_content)
        
        # 从URL中提取题目名称（如果名称为空）
        if not info['name'] and info['url']:
            match = re.search(r'/kata/[^/]+/(.+?)(?:/|$)', info['url'])
            if match:
                info['name'] = match.group(1).replace('-', '_')
        
        return info
    
    def get_code_input(self):
        """获取代码输入"""
        print("\n" + "="*60)
        print("请选择输入方式:")
        print("1. 从文件路径读取")
        print("2. 直接粘贴代码")
        print("3. 从剪贴板读取（需要安装pyperclip）")
        choice = input("选择 (1/2/3): ").strip()
        
        if choice == "1":
            file_path = input("代码文件路径: ").strip().strip('"').strip("'")
            if not os.path.exists(file_path):
                print(f"❌ 文件不存在: {file_path}")
                sys.exit(1)
            with open(file_path, 'r', encoding='utf-8') as f:
                return f.read()
        
        elif choice == "3":
            try:
                import pyperclip
                code = pyperclip.paste()
                print(f"✓ 已从剪贴板读取 {len(code)} 字符")
                return code
            except ImportError:
                print("❌ 请先安装: pip install pyperclip")
                sys.exit(1)
        
        else:  # choice == "2"
            print("\n粘贴代码（完成后单独一行输入 END）:")
            lines = []
            while True:
                try:
                    line = input()
                    if line.strip() == "END":
                        break
                    lines.append(line)
                except EOFError:
                    break
            return '\n'.join(lines)
    
    def fill_missing_info(self, info):
        """填充缺失的信息"""
        print("\n" + "="*60)
        print("题目信息确认")
        print("="*60)
        
        if info['name']:
            print(f"题目名称: {info['name']}")
            confirm = input("  (直接回车确认，或输入新名称): ").strip()
            if confirm:
                info['name'] = confirm
        else:
            info['name'] = input("题目名称（英文，用下划线）: ").strip()
        
        if info['difficulty']:
            print(f"难度等级: {info['difficulty']}")
            confirm = input("  (直接回车确认，或输入新等级): ").strip()
            if confirm:
                info['difficulty'] = confirm
        else:
            info['difficulty'] = input("难度等级（如 6kyu, 7kyu）: ").strip()
        
        if info['url']:
            print(f"题目链接: {info['url']}")
        else:
            url = input("题目链接（可选，直接回车跳过）: ").strip()
            if url:
                info['url'] = url
        
        return info
    
    def create_files(self, info, code):
        """创建解题文件"""
        os.makedirs(self.solution_dir, exist_ok=True)
        
        # 创建代码文件
        solution_file = f"{self.solution_dir}/{info['name']}.py"
        with open(solution_file, 'w', encoding='utf-8') as f:
            # 如果代码开头没有信息注释，添加一个
            if not any(keyword in code[:200].lower() for keyword in ['problem:', '题目:', 'url:']):
                f.write('"""\n')
                f.write(f"Problem: {info['name']}\n")
                if info['url']:
                    f.write(f"URL: {info['url']}\n")
                f.write(f"Difficulty: {info['difficulty']}\n")
                f.write(f"Date: {self.today}\n")
                f.write('"""\n\n')
            f.write(code)
        
        # 创建README
        if self.config.get('preferences', {}).get('create_readme', True):
            readme_file = f"{self.solution_dir}/README.md"
            with open(readme_file, 'w', encoding='utf-8') as f:
                f.write(f"# {info['name']}\n\n")
                f.write(f"**难度:** {info['difficulty']}  \n")
                f.write(f"**完成时间:** {self.today}  \n")
                if info['url']:
                    f.write(f"**链接:** {info['url']}\n")
                f.write(f"\n## 解决方案\n\n")
                f.write(f"查看 [`{info['name']}.py`](./{info['name']}.py)\n")
        
        print(f"\n✓ 文件已创建: {self.solution_dir}/{info['name']}.py")
        return solution_file
    
    def commit_and_push(self, info):
        """提交并推送到GitHub"""
        commit_msg = f"Add solution: {info['name']} ({info['difficulty']}) - {self.today}"
        
        print(f"\n📝 提交消息: {commit_msg}")
        
        auto_push = self.config.get('preferences', {}).get('auto_push', False)
        if not auto_push:
            confirm = input("确认提交并推送? (y/n): ").strip().lower()
            if confirm != 'y':
                print("已取消提交。文件已保存在本地。")
                return False
        
        # Git操作
        self.run_command("git add .")
        success, stdout, stderr = self.run_command(f'git commit -m "{commit_msg}"')
        if not success:
            print(f"⚠️  Commit可能失败: {stderr}")
        
        success, stdout, stderr = self.run_command("git push origin main")
        if success:
            print("\n" + "="*60)
            print("✅ 成功提交到GitHub!")
            print("="*60)
            repo_url = f"https://github.com/{self.config.get('github', {}).get('username', 'dongzhang2077')}/daily_practice"
            print(f"查看: {repo_url}")
            return True
        else:
            print(f"❌ 推送失败: {stderr}")
            return False
    
    def run(self):
        """主流程"""
        print("="*60)
        print("🚀 Daily Practice - Super Auto Submit")
        print("="*60)
        
        # 获取代码
        code = self.get_code_input()
        
        # 提取信息
        info = self.extract_info_from_code(code)
        
        # 补充信息
        info = self.fill_missing_info(info)
        
        # 创建文件
        self.create_files(info, code)
        
        # 提交
        self.commit_and_push(info)


if __name__ == "__main__":
    try:
        submitter = DailyPracticeSubmitter()
        submitter.run()
    except KeyboardInterrupt:
        print("\n\n操作已取消。")
    except Exception as e:
        print(f"\n❌ 错误: {e}")
        import traceback
        traceback.print_exc()
