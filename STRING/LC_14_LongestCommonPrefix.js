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
console.log(longestCommonPrefix(strs));