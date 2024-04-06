/**
 * 
Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */

var romanToInt = function(s) {
    const sym = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {
      const cur = sym[s[i]];
      const next = sym[s[i + 1]];

      if (cur < next) {
          result += next - cur;
          i++;
      } else {
          result += cur;
      }
  }

  return result;
};

let s = "MCMXCIV";
console.log(romanToInt(s)); // 1994


/**
 * const sym = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }: This line creates a dictionary sym that maps each Roman numeral to its corresponding integer value.
let result = 0;: This line initializes the result variable to 0.
for (let i = 0; i < s.length; i++) { ... }: This for loop iterates over each character in the string s.
const cur = sym[s[i]]; const next = sym[s[i + 1]];: These lines get the integer values of the current character and the next character in the string.
if (cur < next) { result += next - cur; i++; } else { result += cur; }: If the value of the current character is less than the value of the next character, it means we have a situation like IV (4) or IX (9), where a smaller numeral appears before a larger numeral. So, we add the difference of the two numerals to the result and increment i to skip the next character. Otherwise, we simply add the value of the current character to the result.
return result;: This line returns the final result after the loop has finished.
Let’s dry run this function with s = "MCMXCIV":

Initially, result = 0.
The first character is 'M', so cur = 1000 and next = 100. Since cur >= next, we add cur to result, making result = 1000.
The next character is 'C', so cur = 100 and next = 1000. Since cur < next, we add next - cur to result and increment i, making result = 1900.
The next character is 'X', so cur = 10 and next = 100. Since cur < next, we add next - cur to result and increment i, making result = 1990.
The next character is 'I', so cur = 1 and next = 5. Since cur < next, we add next - cur to result and increment i, making result = 1994.
The function returns result, which is 1994.

The time complexity of this function is O(n), where n is the length of the string s, because it makes one pass through the string. 
The space complexity is O(1), because it uses a constant amount of space to store the sym dictionary and the result variable. 
 */