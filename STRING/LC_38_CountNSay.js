/**
 * Example 1:

Input: n = 1
Output: "1"
Explanation: This is the base case.
Example 2:

Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
 */

function countNSay(n){
    if(n<=0){
        return null;
    }

    let result = "1";
    
    let i = 1;
    while(i++ < n ){
        let sb = "";

        let count = 1;
        for (let j = 1; j < result.length; j++) {
            if(result.charAt(j) === result.charAt(j - 1)) {
                count++;
            } else {
                sb += count;
                sb += result.charAt(j - 1);
                count = 1;
            }
        }
        sb += count;
        sb += result.charAt(result.length - 1);
        result = sb;
    }
    return result;
}


let n = 4;
console.log(countNSay(n)); // 1211

/**
 * This function generates the nth term of the count-and-say sequence. The count-and-say sequence is a sequence of digit strings defined by the recursive formula: count and say the number of times each digit appears in the previous term.

Here’s how it works:

if (n <= 0) { return null; }: If n is less than or equal to 0, the function returns null.
let result = "1"; let i = 1;: The function initializes result as “1” (the first term of the sequence) and i as 1.
while (i++ < n) { ... }: This while loop generates the next term of the sequence until i is equal to n.
Inside the loop, it creates a new term by iterating over the digits of the current term (result). For each digit, if it’s the same as the previous digit, it increments count. If it’s different, it appends count and the previous digit to the new term, and resets count to 1.
After the loop, it appends count and the last digit to the new term.
return result;: After n iterations, the function returns result, which is the nth term of the sequence.
Let’s dry run this function with n = 4:

Initially, result = "1" and i = 1.
In the first iteration, result = "1", so the new term is “11” (one “1”).
In the second iteration, result = "11", so the new term is “21” (two "1"s).
In the third iteration, result = "21", so the new term is “1211” (one “2”, one “1”).
The function returns result, which is “1211”.
So, if n = 4, countAndSay(n) would return “1211”.

The time complexity of this function is O(n^2), where n is the input to the function. This is because for each term of the sequence, 
the function may need to iterate over all the digits of the previous term. 
The space complexity is O(n), where n is the length of the nth term of the sequence. This is because the function needs to store the 
nth term of the sequence.
 */