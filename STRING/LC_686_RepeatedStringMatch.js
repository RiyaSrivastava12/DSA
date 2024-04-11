/**
 * Given two strings a and b, return the minimum number of times you should repeat string a so that string b is a substring of it. 
   If it is impossible for b​​​​​​ to be a substring of a after repeating it, return -1.

Notice: string "abc" repeated 0 times is "", repeated 1 time is "abc" and repeated 2 times is "abcabc".

Example 1:

Input: a = "abcd", b = "cdabcdab"
Output: 3
Explanation: We return 3 because by repeating a three times "abcdabcdabcd", b is a substring of it.
Example 2:

Input: a = "a", b = "aa"
Output: 2
 */

var repeatedStringMatch = function(a, b) {
    const count =  Math.ceil(b.length/a.length);
    const str = a.repeat(count);
    return str.includes(b)? count : (str + a).includes(b)? count+1 : -1 
};

let a = "abcd", b = "cdabcdab";
console.log(repeatedStringMatch(a,b)); //3

/**
 * Here’s how it works:

const count = Math.ceil(B.length / A.length): This line calculates the minimum number of times string A needs to be repeated so that its length is at least as long as string B. It uses Math.ceil to round up to the nearest integer, because we can’t repeat a string a fractional number of times.
const str = A.repeat(count): This line creates a new string str by repeating string A count times.
return str.includes(B) ? count : (str + A).includes(B) ? count + 1 : -1: This line checks if string B is a substring of str. If it is, it returns count. If it’s not, it checks if B is a substring of str concatenated with another A. If it is, it returns count + 1. If it’s still not, it returns -1.
Let’s dry run this function with A = "abcd" and B = "cdabcdab":

count = Math.ceil(B.length / A.length) is Math.ceil(8 / 4), which is 2.
str = A.repeat(count) is "abcd".repeat(2), which is "abcdabcd".
str.includes(B) is "abcdabcd".includes("cdabcdab"), which is false.
(str + A).includes(B) is ("abcdabcd" + "abcd").includes("cdabcdab"), which is true.
So, the function returns count + 1, which is 2 + 1, which is 3.
So, if A = "abcd" and B = "cdabcdab", repeatedStringMatch(A, B) would return 3.

The time complexity of this function is O(n), where n is the length of string B, 
because it makes one pass through string B to check if it’s a substring of str or str + A. 

The space complexity is O(m), where m is the length of string A, because it needs to store string A and its repeated versions. 
This function assumes that A and B are non-empty strings. 
 */