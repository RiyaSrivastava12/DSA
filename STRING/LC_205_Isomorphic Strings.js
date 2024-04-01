/**
 * Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character, but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
 */

// Time Complexity : O(n)
var isIsomorphic = function(s, t) {
   
    if(s.length != t.length)
        return false;
    // Create two maps for s & t strings...
    const map1 = [256];
    const map2 = [256];
    // Traverse all elements through the loop...
    for(let idx = 0; idx < s.length; idx++){
        // Compare the maps, if not equal, return false...
        if(map1[s.charAt(idx)] != map2[t.charAt(idx)])
            return false;
        
        map1[s.charAt(idx)] = idx + 1;
        map2[t.charAt(idx)] = idx + 1;
    }
    return true;    
};

let s = "egg", t = "add";
console.log(isIsomorphic(s,t)); // True

/**
 * If the lengths of s and t are not equal, it returns false because two strings of different lengths cannot be isomorphic.
It creates two arrays map1 and map2 to store the last seen positions of characters in s and t, respectively.
It then starts a loop that iterates over each character in s and t.
In each iteration, it checks if the last seen positions of the current characters in s and t are the same.
If they are not the same, it returns false because this means that the current characters in s and t do not correspond to each other.
If they are the same, it updates the last seen positions of the current characters in s and t to idx + 1.
If the function finishes the loop without returning, it means that all characters in s and t correspond to each other. In this case, it returns true.
Let’s dry run this code with an example: s = "egg", t = "add".

For idx = 0, s.charAt(idx) is e and t.charAt(idx) is a. Since map1['e'] and map2['a'] are both undefined, it updates map1['e'] and map2['a'] to idx + 1 which is 1.
For idx = 1, s.charAt(idx) is g and t.charAt(idx) is d. Since map1['g'] and map2['d'] are both undefined, it updates map1['g'] and map2['d'] to idx + 1 which is 2.
For idx = 2, s.charAt(idx) is g and t.charAt(idx) is d. Since map1['g'] and map2['d'] are both 2, it updates map1['g'] and map2['d'] to idx + 1 which is 3.
After the loop, the function returns true because all characters in s and t correspond to each other.
So, the function isIsomorphic("egg", "add") returns true.
 */