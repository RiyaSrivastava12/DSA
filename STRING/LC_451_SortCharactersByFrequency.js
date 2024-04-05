/**
 * Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
Return the sorted string. If there are multiple answers, return any of them.

Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
 */

var frequencySort = function(s) {
    let counter = new Map();
    for(let char of s){
        counter.set(char,(counter.get(char) || 0) + 1);
    }


    let pq = Array.from(counter.entries());
    pq.sort((a,b) => b[1] - a[1]);

    let result = "";
    for(let [char,num] of pq){
        result += char.repeat(num);
    }
    return result;
};

let s = "tree";
console.log(frequencySort(s)); // eetr

/**
 * Time complexity:
O(nlogn)

Space complexity:
O(n)

let’s dry run and explain this code line by line. This JavaScript function frequencySort sorts the characters in a string s based on the frequency of each character, from highest to lowest.

const counter = new Map();: This line creates a new Map object counter that will be used to store each character in the string s as a key and its frequency as the value.
for (const char of s) { counter.set(char, (counter.get(char) || 0) + 1); }: This for loop iterates over each character char in the string s. For each character, it increments its count in the counter map. If the character is not already in the map, it gets a default count of 0 (counter.get(char) || 0) before incrementing.
const pq = Array.from(counter.entries());: This line converts the counter map into an array of key-value pairs (entries). Each entry is an array where the first element is the character and the second element is its frequency.
pq.sort((a, b) => b[1] - a[1]);: This line sorts the pq array in descending order based on the frequency of each character. The sort function compares the frequencies (the second element of each entry) to determine the order.
let result = '';: This line initializes an empty string result that will be used to build the final sorted string.
for (const [char, freq] of pq) { result += char.repeat(freq); }: This for loop iterates over each entry in the pq array. For each entry, it appends the character repeated freq times to the result string.
return result;: This line returns the final sorted string.
Let’s assume s = "tree" for this dry run:

After the first for loop, counter would be {t: 1, r: 1, e: 2}.
pq would be [["t", 1], ["r", 1], ["e", 2]].
After sorting, pq would be [["e", 2], ["t", 1], ["r", 1]].
After the second for loop, result would be "eetr".
So, if s = "tree", frequencySort(s) would return "eetr".
 */