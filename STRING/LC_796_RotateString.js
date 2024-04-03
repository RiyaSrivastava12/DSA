/**
 * Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
A shift on s consists of moving the leftmost character of s to the rightmost position.
For example, if s = "abcde", then it will be "bcdea" after one shift.
 */

var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false;
    return s.concat(s).includes(goal);
};

/**
 * let’s dry run the function rotateString with an example input s = "abcde", t = "cdeab":

Check if the lengths of s and t are equal. They are, so we continue.
Concatenate s with itself and check if the resulting string includes t. The resulting string 
is "abcdeabcde", which includes t = "cdeab". So, the function returns true.

Time Complexity: The time complexity is O(n), where n is the length of the string s. 
This is because the function needs to iterate over each character in s once when concatenating s with itself and checking if the resulting string includes goal.
Space Complexity: The space complexity is O(n), where n is the length of the string s. 
This is because the function creates a new string that is twice the length of s when concatenating s with itself.

 */