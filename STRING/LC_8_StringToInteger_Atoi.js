/**
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
 */

var myAtoi = function(s) {
    s = s.trim();  // Remove leading and trailing whitespace
    if (s.length === 0) {
        return 0;  // Handle empty string case
    }
    let num = 0;
    let i = 0;
    let sign = 1;  // 1 for positive, -1 for negative
    if (s[i] === '+') {
        i++;
    } else if (s[i] === '-') {
        i++;
        sign = -1;
    }
    while (i < s.length && /^\d$/.test(s[i])) {
        num = num * 10 + parseInt(s[i]);
        i++;
    }
    num *= sign;
    num = Math.max(Math.min(num, Math.pow(2, 31) - 1), -Math.pow(2, 31));  // Check for integer overflow
    return num;
}

let s = "  -42";
console.log(myAtoi(s));

/**
 * Time Complexity: The time complexity is O(n), where n is the length of the string s. This is because the function iterates over each character in the string exactly once.

Space Complexity: The space complexity is O(1), which means it uses a constant amount of space. The function only uses a few variables (num, i, sign, cur, and next), and their size does not change with the input size. The function does not use any 
data structures like arrays or objects that would grow with the size of the input. Therefore, the space complexity is constant.

s = s.trim();: This line removes leading and trailing whitespace from the string s.
if (s.length === 0) { return 0; }: If the string is empty after trimming, the function returns 0.
let num = 0; let i = 0; let sign = 1;: These lines initialize the result variable num to 0, the index i to 0, and the sign to 1 (positive).
if (s[i] === '+') { i++; } else if (s[i] === '-') { i++; sign = -1; }: If the first character of the string is a plus sign, it increments i to skip this character. If it’s a minus sign, it increments i and changes sign to -1 (negative).
while (i < s.length && /^\d$/.test(s[i])) { num = num * 10 + parseInt(s[i]); i++; }: This while loop continues as long as i is within the string’s length and the current character is a digit. For each digit, it multiplies num by 10 and adds the integer value of the digit, then increments i.
num *= sign;: This line adjusts num for its sign.
num = Math.max(Math.min(num, Math.pow(2, 31) - 1), -Math.pow(2, 31));: This line checks for integer overflow. If num is outside the range of a 32-bit signed integer, it sets num to the maximum or minimum value.
return num;: This line returns the final result.
Let’s dry run this function with s = "   -42":

After trimming, s = "-42".
The first character is '-', so i becomes 1 and sign becomes -1.
The next characters are digits, so num becomes 4, then 42.
num is multiplied by sign, so num becomes -42.
-42 is within the range of a 32-bit signed integer, so num stays -42.
The function returns -42.
 */