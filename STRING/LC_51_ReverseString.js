function reverseString(s){
    let str = s.split(" ");
    let output = "";

    for(let i = str.length - 1; i>=0 ; i--){
        if(str[i]){
            output += (output ? " " : "") + str[i];
        }
    }
    return output;
}

let s = "the sky is blue";
console.log(reverseString(s));

/**
 *  Time Complexity: The time complexity is O(n),
    where n is the length of the string s. This is because the function iterates over each character in the string exactly once.
    Space Complexity: The space complexity is also O(n), where n is the length of the string s. In the worst-case scenario, 
    all characters from the string s could be added to the output string. Therefore, the space required can be up to the length of the input string.

The function splits the input string s into an array of words str using the split method with a space character as the separator.
It initializes an empty string output to store the final result.
The function then iterates over the str array in reverse order (from the last element to the first).
If the current word str[i] is not an empty string (which can happen if there are multiple spaces between words in s), it adds the word to output.
It adds a space before the word if output is not an empty string. This is done using the ternary operator (output ? " " : "").
After the loop, output will be the string s with the words reversed. The function returns output.


DRY RUN :

Split the input string s into an array of words str using the split method with a space character as the separator. So, str = ["the", "sky", "is", "blue"].
Initialize an empty string output to store the final result. So, output = "".
Start iterating over the str array in reverse order.
For the 4th word "blue":
Since "blue" is not an empty string, add it to output. Since output is an empty string, don’t add a space before "blue". So, output = "blue".
For the 3rd word "is":
Since "is" is not an empty string, add it to output. Since output is not an empty string, add a space before "is". So, output = "blue is".
For the 2nd word "sky":
Since "sky" is not an empty string, add it to output. Since output is not an empty string, add a space before "sky". So, output = "blue is sky".
For the 1st word "the":
Since "the" is not an empty string, add it to output. Since output is not an empty string, add a space before "the". So, output = "blue is sky the".
After the loop, output = "blue is sky the", which is the string s with the words reversed.
So, the function reverseWords("the sky is blue") returns "blue is sky the"
 */