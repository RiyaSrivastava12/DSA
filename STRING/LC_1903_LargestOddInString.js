function largestOdd(num){
    let i = num.length - 1;
    while(i>=0){
        if(num[i] % 2 == 1){
            return num.substring(0, i+1);
        }
        i--;

    }
    return "";
}

let num = "3542726";
console.log(largestOdd(num)); // 35427

/**
 * Time Complexity: The time complexity is O(n), where n is the length of the string num. This is because the function 
   iterates over each character in num at most once.
   Space Complexity: The space complexity is O(1), assuming that the size of the input num is not considered in the space complexity. 
   This is because the function uses a fixed amount of space to store i, n, and the return value. The space used does not increase
    with the size of the input string num.

    The function initializes a variable i to the index of the last character in num.
It then enters a loop that continues as long as i is greater than or equal to 0.
In each iteration of the loop, it gets the character at index i in num and stores it in n.
It checks if n is an odd number by taking n modulo 2 and checking if the result is 1. If n is odd, it returns a substring of num from index 0 to i+1 (inclusive). This substring represents the largest odd number that can be made by deleting some digits from the right side of num.
If n is not odd, it decrements i by 1 and continues to the next iteration of the loop.
If the function exits the loop without returning, it means that no odd number could be found in num. In this case, it returns an empty string.
 */