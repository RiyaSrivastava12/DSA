/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 */

var strStr = function(haystack, needle) {
   
    if(haystack.includes(needle)){
        return haystack.indexOf(needle);
       
    }
    else{
        return -1;
    }
};

let haystack = "sadbutsad", needle = "sad";
console.log(strStr(haystack,needle)); // 0

/**
 * if(haystack.includes(needle)): This line checks if needle is a substring of haystack. If it is, the function proceeds to the next line.
return haystack.indexOf(needle);: This line returns the index of the first occurrence of needle in haystack.
else { return -1; }: If needle is not a substring of haystack, the function returns -1.
Let’s dry run this function with haystack = "hello" and needle = "ll":

haystack.includes(needle) is "hello".includes("ll"), which is true.
So, the function returns haystack.indexOf(needle), which is "hello".indexOf("ll"), which is 2.
So, if haystack = "hello" and needle = "ll", strStr(haystack, needle) would return 2.

The time complexity of this function is O(n), where n is the length of haystack, because the includes and indexOf methods each make one pass through haystack. 
The space complexity is O(1), because the function uses a constant amount of space to store haystack and needle and a few variables.
 */