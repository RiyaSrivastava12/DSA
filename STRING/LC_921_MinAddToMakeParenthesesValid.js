/**
 * Example 1:

Input: s = "())"
Output: 1
Example 2:

Input: s = "((("
Output: 3
 */

var minAddToMakeValid = function(s) {
   
    let open = 0, close = 0;
    
    for(let c of s) {
        if(c === '(') open++;
        else if(!open) close++;
        else open--;
        
    }
    return open + close;

};

let s = "(((())"
console.log(minAddToMakeValid(s)); // 2


/**
 * let open = 0, close = 0;: These lines initialize two counters, open and close. open counts the number of open parentheses that have not been closed yet, and close counts the number of close parentheses that do not have a matching open parenthesis.
for(let c of S) { ... }: This for loop iterates over each character c in the string S.
if(c === '(') open++;: If the current character is an open parenthesis, it increments open.
else if(!open) close++;: If the current character is not an open parenthesis and there are no open parentheses (open is 0), it increments close.
else open--;: If the current character is not an open parenthesis and there are some open parentheses (open is not 0), it decrements open.
return open + close;: This line returns the sum of open and close, which is the minimum number of parentheses we must add to make the string valid.
Let’s dry run this function with S = "())":

Initially, open = 0 and close = 0.
The first character is '(', so open becomes 1.
The next character is ')', so open becomes 0.
The next character is ')', but there are no open parentheses, so close becomes 1.
The function returns open + close, which is 1.
So, if S = "())", minAddToMakeValid(S) would return 1.

The time complexity of this function is O(n), where n is the length of the string S, because it makes one pass through the string. 
The space complexity is O(1), because it uses a constant amount of space to store the open and close counters and a few variables.
 */