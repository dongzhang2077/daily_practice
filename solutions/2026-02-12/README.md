# check_if_undefined

**难度:** 8kyu  
**完成时间:** 2026-02-12  
**类型:** Bug Fix

## 题目描述

修复函数使其能够正确检查输入是否为 undefined。

原始代码（有bug）：
```javascript
function isUndefined(value) {
    return value == 'undefined';
}
```

## 问题分析

原代码的问题：
- 使用了字符串比较 `value == 'undefined'`
- 这会将变量与字符串 `'undefined'` 进行比较，而不是检查类型
- 例如：`isUndefined('undefined')` 会返回 `true`（错误的！）

## 解决方案

### 方案1：直接比较（推荐）
```javascript
function isUndefined(value) {
    return value === undefined;
}
```

### 方案2：使用 typeof
```javascript
function isUndefined(value) {
    return typeof value === 'undefined';
}
```

## 关键点

- `undefined` 是JavaScript的一个原始类型，不是字符串
- 使用 `===` 而不是 `==` 以避免类型转换
- `typeof undefined` 返回字符串 `'undefined'`

## Python等价实现

```python
def is_undefined(value=None):
    return value is None
```
