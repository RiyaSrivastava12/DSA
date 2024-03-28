function removeOuterParenthese(s){
    let parenthesesCount = 0;
    let result = "";

    for(let letter of s){
        if(letter === "("){
            if(parenthesesCount){
                result += letter;
            }
            parenthesesCount++;
        }
        else{
            parenthesesCount--;
            if(parenthesesCount){
                result += letter;
            }
        }
    }
    return result;
}

let s = "(()())(())";
console.log(removeOuterParenthese(s)); // ()()()

/**
 * Time Complexity: The time complexity is O(n), where n is the length of the string S. This is because the function iterates over 
 * each character in the string exactly once.
 * Space Complexity: The space complexity is also O(n), where n is the length of the string S. In the worst-case scenario, all characters from the string S could be added to the result 
string (when there are no outer parentheses to remove). Therefore, the space required can be up to the length of the input string.


dry run the function removeOuterParentheses with the input string S = "(()())":

Initialize parenthesCount = 0 and result = "".

Start iterating over each character in S.
For the 1st character (:
parenthesCount becomes 1.
Since parenthesCount is not more than 1, we don’t append it to result.
For the 2nd character (:
parenthesCount becomes 2.
Since parenthesCount is more than 1, we append it to result. So, result = "(".
For the 3rd character ):
parenthesCount becomes 1.
Since parenthesCount is more than 0, we append it to result. So, result = "()".
For the 4th character (:
parenthesCount becomes 2.
Since parenthesCount is more than 1, we append it to result. So, result = "()(".
For the 5th character ):
parenthesCount becomes 1.
Since parenthesCount is more than 0, we append it to result. So, result = "()()".
For the 6th character ):
parenthesCount becomes 0.
Since parenthesCount is not more than 0, we don’t append it to result.

After the loop, result = "()()", which is the string S with the outermost parentheses removed.
So, the function removeOuterParentheses("(()())") returns "()()".

 */