//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';
    
    for(let i = 0; i < strs[0].length; i++) {
        for(let s of strs) {
            if(s[i] !== strs[0][i]) return s.slice(0, i);
        }
    }
    return strs[0];
};

let strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs)); // fl

/**
 * Time Complexity: The time complexity is O(n*m), where n is the number of strings and m is the length of the longest string. 
   This is because in the worst case, the function needs to compare every character in every string.
   Space Complexity: The space complexity is O(1), assuming that the size of the input strs is not considered in the space complexity. 
   This is because the function uses a fixed amount of space to store i, s, and the return value. The space used does not increase with 
   the size of the input array strs.

   The function first checks if the input array strs is empty. If it is, it returns an empty string.
Then it starts a loop that iterates over each character in the first string of strs (i.e., strs[0]).
Inside this loop, it starts another loop that iterates over each string s in strs.
In this inner loop, it checks if the character at index i in s is the same as the character at index i in strs[0].
If the characters are not the same, it returns a substring of s from index 0 to i. This substring is the longest common prefix of all strings in strs up to index i.
If the function finishes the outer loop without returning, it means that the first string of strs is a common prefix of all strings in strs. In this case, it returns the first string of strs.
Let’s dry run this code with an example: strs = ["flower","flow","flight"].

For i = 0, s[i] is f for all strings in strs, so we continue to the next character.
For i = 1, s[i] is l for all strings in strs, so we continue to the next character.
For i = 2, s[i] is o for "flower" and "flow", but i for "flight". So, we return "fl" which is the longest common prefix of all strings in strs.
 */