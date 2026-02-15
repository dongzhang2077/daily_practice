# add_binary

**难度:** 7kyu  
**完成时间:** 2026-02-14  
**URL:** https://www.codewars.com/kata/551f37452ff852b7bd000139

## 题目描述

实现一个函数，将两个数字相加并以二进制字符串形式返回它们的和。

### 示例

```
1, 1   -->  "10"    (1 + 1 = 2，十进制2 = 二进制10)
5, 9   -->  "1110"  (5 + 9 = 14，十进制14 = 二进制1110)
```

## 我的解决方案

### 算法思路

1. **先求和：** 直接将两个十进制数相加
2. **再转换：** 利用 `Number.toString(radix)` 方法将结果转为二进制字符串

核心就一行：`(a + b).toString(2)`，其中参数 `2` 表示二进制。

### 代码实现

```javascript
function addBinary(a,b) {
    //use the function convert decimal to binary
    return (a + b).toString(2);
}
```

### 复杂度分析

- **时间复杂度:** O(log n) — `toString(2)` 需要逐位计算二进制表示，位数为 log2(n)
- **空间复杂度:** O(log n) — 返回的二进制字符串长度为 log2(n)

其中 n = a + b。

## 参考：手动转换解法

```javascript
function addBinary(a, b) {
    let sum = a + b;
    let binary = "";
    if (sum === 0) return "0";
    while (sum > 0) {
        binary = (sum % 2) + binary;
        sum = Math.floor(sum / 2);
    }
    return binary;
}
```

### 原理解析

- 不断对 2 取余获得最低位的二进制值
- 用整除 2 去掉最低位
- 将余数拼接到结果字符串的前面
- 重复直到商为 0

### 对比

| 方法 | 优点 | 缺点 |
|------|------|------|
| 我的方法 | 一行代码，简洁直观 | 依赖内置API |
| 手动转换 | 理解底层原理，面试友好 | 代码较长 |

## 关键点总结

- ✅ `Number.toString(radix)` 可将数字转换为任意进制（2-36）的字符串
- ✅ 参数 `2` = 二进制，`8` = 八进制，`16` = 十六进制
- ✅ 手动转换的核心：反复 `% 2` 取余 + `Math.floor(/ 2)` 整除
- ✅ 加法在转换之前或之后都可以，先加再转更简单

---

# dig_pow

**难度:** 6kyu  
**完成时间:** 2026-02-14  
**URL:** https://www.codewars.com/kata/5552101f47fc5178b1000050

## 题目描述

给定两个正整数 n 和 p，找到正整数 k 使得 n 的各位数字从 p 开始依次升幂求和等于 k * n。

公式：`a^p + b^(p+1) + c^(p+2) + ... = n * k`

如果 k 存在则返回 k，否则返回 -1。

### 示例

```
89, 1     -->  1   (8^1 + 9^2 = 89 = 89 * 1)
92, 1     -->  -1  (不存在满足条件的 k)
695, 2    -->  2   (6^2 + 9^3 + 5^4 = 1390 = 695 * 2)
46288, 3  -->  51  (4^3 + 6^4 + 2^5 + 8^6 + 8^7 = 2360688 = 46288 * 51)
```

## 我的解决方案

### 算法思路

1. **提取数字：** 将 n 转为字符串再拆分，得到各位数字数组
2. **累加幂次：** 用 `reduce` 遍历，第 i 位数字计算 `digit^(p+i)` 并累加
3. **判断整除：** 若累加和能被 n 整除，返回商 k；否则返回 -1

### 代码实现

```javascript
function digPow(n, p){
    const numbers = String(n).split('');
    const sum = numbers.reduce((acc, curr, index) => acc + Math.pow(curr, p + index), 0);
    return Number.isInteger(sum / n) ? sum / n : -1;
}
```

### 复杂度分析

- **时间复杂度:** O(d) — d 为 n 的位数，遍历一次数字数组
- **空间复杂度:** O(d) — 存储拆分后的数字数组

## 参考：使用取模判断的解法

```javascript
function digPow(n, p) {
    const sum = [...String(n)].reduce((s, d, i) => s + Math.pow(+d, p + i), 0);
    return sum % n === 0 ? sum / n : -1;
}
```

### 原理解析

- 用展开运算符 `[...String(n)]` 代替 `split('')` 拆分数字
- `+d` 将字符显式转为数字（比隐式转换更清晰）
- 用 `sum % n === 0` 判断整除，比 `Number.isInteger(sum / n)` 更直接

### 对比

| 方法 | 优点 | 缺点 |
|------|------|------|
| 我的方法 | 逻辑清晰，步骤分明 | `Number.isInteger` 略显冗长 |
| 参考方法 | 更简洁，取模判断更直接 | `+d` 隐式类型转换需要了解 |

## 关键点总结

- ✅ `String(n).split('')` 将数字拆分为各位数字数组
- ✅ `Array.reduce()` 适合累加类计算，利用 `index` 参数控制幂次
- ✅ `Math.pow(base, exp)` 或 `base ** exp` 计算幂
- ✅ 整除判断两种方式：`Number.isInteger(a/b)` 或 `a % b === 0`
