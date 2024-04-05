/**
 * Example 1:

Input: s = "(1+(2*3)+((8)/4))+1"
Output: 3
Explanation: Digit 8 is inside of 3 nested parentheses in the string.
Example 2:

Input: s = "(1)+((2))+(((3)))"
Output: 3
 */

var maxDepth = function(s) {
    let count = 0;
    let maxNum = 0;
    for (let c of s) {
        if (c === '(') {
            count++;
            if (maxNum < count)
                maxNum = count;
        } else if (c === ')') {
            count--;
        }
    }
    return maxNum;
};

let s = "(1)+((2))+(((3)))";
console.log(maxDepth(s)); // 3

/**
 * Time complexity:
O(n), where n is the length of the input string s. We traverse the entire string once.
Space complexity:
O(1), as we only use a constant amount of extra space for variables count and max_num.
 */