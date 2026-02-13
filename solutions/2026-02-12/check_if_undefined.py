"""
Problem: check_if_undefined
Difficulty: 8kyu
Date: 2026-02-12
Description: Fix the function to correctly check if the input is undefined
"""

# Original buggy code:
# function isUndefined(value) {
#     return value == 'undefined';
# }

# Fixed code (JavaScript):
"""
function isUndefined(value) {
    return value === undefined;
}

// Alternative solution using typeof:
function isUndefined(value) {
    return typeof value === 'undefined';
}
"""

# Python equivalent:
def is_undefined(value=None):
    """Check if value is None (Python's undefined equivalent)"""
    return value is None


# Explanation:
# The bug was comparing value to the STRING 'undefined' instead of 
# checking if the value IS undefined.
# 
# Wrong: value == 'undefined'  (compares to string)
# Right: value === undefined   (checks actual undefined type)
