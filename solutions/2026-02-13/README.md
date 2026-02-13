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

## 我的解决方案

### 算法思路

1. **第一遍遍历：统计字符频率**
   - 使用字典/Map存储每个字符的出现次数
   - 将所有字符转换为小写（忽略大小写）

2. **第二遍遍历：构建结果**
   - 按原字符串顺序遍历
   - 如果字符出现次数为1，添加 `"("`，否则添加 `")"`

### 代码实现

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

### 复杂度分析

- **时间复杂度:** O(n) - 遍历字符串两次
- **空间复杂度:** O(k) - k为不同字符的数量

## 参考：更优雅的解法

```javascript
function duplicateEncode(word){
  const lower = word.toLowerCase();
  return [...lower].map(c => 
    lower.split(c).length > 2 ? ')' : '('
  ).join('');
}
```

### 原理解析

- `split(c)` 会把字符串按字符 `c` 切割
- 如果 `c` 出现 2 次，会切出 3 段
- 如果 `c` 出现 1 次，会切出 2 段
- 巧妙利用 split() 的特性来判断字符出现次数，无需显式计数

### 对比

| 方法 | 优点 | 缺点 |
|------|------|------|
| 我的方法 | 时间复杂度O(n)，高效 | 代码较长 |
| 参考方法 | 代码简洁优雅 | 时间复杂度O(n²)，每次split都遍历 |

## 关键点总结

- ✅ 字符频率统计的经典模式
- ✅ 使用哈希表/字典优化查找
- ✅ 大小写敏感性处理
- ✅ 两次遍历保证O(n)时间复杂度
