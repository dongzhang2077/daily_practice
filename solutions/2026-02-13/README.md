# duplicate_encoder

**难度:** 6kyu  
**完成时间:** 2026-02-13  
**URL:** https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

## 题目描述

将字符串转换为新字符串，其中：
- 如果字符在原字符串中只出现一次，则用 `"("` 表示
- 如果字符在原字符串中出现多次，则用 `")"` 表示
- 判断时忽略大小写

### 示例

```
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
```

## 解题思路

### 算法步骤

1. **第一遍遍历：统计字符频率**
   - 使用字典/Map存储每个字符的出现次数
   - 将所有字符转换为小写（忽略大小写）
   - 遍历字符串，记录每个字符出现的次数

2. **第二遍遍历：构建结果**
   - 按原字符串顺序遍历
   - 如果字符出现次数为1，添加 `"("`
   - 否则添加 `")"`

### 时间复杂度
- **O(n)** - 需要遍历字符串两次，n为字符串长度

### 空间复杂度
- **O(k)** - 需要字典存储不同字符的计数，k为不同字符的数量

## JavaScript解决方案

```javascript
function duplicateEncode(word){
    const dict = {};
    let output = "";
    
    // First pass: count character frequencies
    word.split('').forEach(char => {
        let c = char.toLowerCase();
        if (dict[c]){
            dict[c] += 1;
        }
        else{
            dict[c] = 1;
        }
    });
    
    // Second pass: build output string
    word.split('').forEach(char => {
        let c = char.toLowerCase();
        if (dict[c] === 1){
            output += "(";
        }
        else {
            output += ")";
        }
    });
    
    return output;
}
```

## Python解决方案

### 方案1：标准实现
```python
def duplicate_encode(word):
    word_lower = word.lower()
    
    # Count character frequencies
    char_count = {}
    for char in word_lower:
        char_count[char] = char_count.get(char, 0) + 1
    
    # Build output based on frequency
    output = ""
    for char in word_lower:
        if char_count[char] == 1:
            output += "("
        else:
            output += ")"
    
    return output
```

### 方案2：更Pythonic的实现
```python
def duplicate_encode(word):
    word_lower = word.lower()
    return ''.join('(' if word_lower.count(c) == 1 else ')' for c in word_lower)
```

注意：方案2虽然代码简洁，但时间复杂度为O(n²)，因为每次count()都要遍历整个字符串。

## 关键点总结

1. **大小写处理**
   - 使用 `toLowerCase()` / `lower()` 统一转换
   - "Success" 中的 'S' 和 's' 被视为相同字符

2. **数据结构选择**
   - JavaScript：使用对象 `{}` 作为字典
   - Python：使用字典 `dict` 或 `Counter`

3. **两次遍历**
   - 第一次统计频率
   - 第二次构建结果
   - 保证了O(n)的时间复杂度

4. **边界情况**
   - 空字符串：返回空字符串
   - 特殊字符（如空格、括号）：也需要计数
   - 例如 `"(( @"` 中的空格和 `(` 都出现两次

## 测试用例

| 输入 | 输出 | 说明 |
|------|------|------|
| `"din"` | `"((("` | 所有字符都只出现一次 |
| `"recede"` | `"()()()"` | 'e'出现3次，其他各出现1次 |
| `"Success"` | `")())())"` | 's'出现3次（忽略大小写） |
| `"(( @"` | `"))(("` | 特殊字符也要计数 |

## 学习要点

- ✅ 字符频率统计的经典模式
- ✅ 使用哈希表/字典优化查找
- ✅ 大小写敏感性处理
- ✅ 时间复杂度优化（两次遍历 vs 嵌套遍历）
