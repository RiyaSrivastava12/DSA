/**
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 * Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 */

//Using Combinatorial Formula
//Intuition: Pascal's triangle can also be generated using combinatorial formula C(n, k) = C(n-1, k-1) + C(n-1, k), where C(n, k) represents the binomial coefficient. We can calculate each element of the triangle using this formula. This approach avoids the need for storing the entire triangle in memory, making it memory-efficient.

var generate = function(numRows) {
    let result = [];
    if (numRows === 0) {
        return result;
    }

    let firstRow = [1];
    result.push(firstRow);

    for (let i = 1; i < numRows; i++) {
        let prevRow = result[i - 1];
        let currentRow = [1];

        for (let j = 1; j < i; j++) {
            currentRow.push(prevRow[j - 1] + prevRow[j]);
        }

        currentRow.push(1);
        result.push(currentRow);
    }

    return result;
};

let numRows = 5;
console.log(generate(numRows)); // [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]

/**
 * Time Complexity: The time complexity is O(n^2), where n is the number of rows. This is because there are two nested loops in the 
   function: the outer loop runs numRows times, and for each iteration of the outer loop, the inner loop runs i times, where i is the
    current row number. In the worst-case scenario, i is equal to numRows, so the total number of operations is proportional to the 
    square of numRows.

Space Complexity: The space complexity is also O(n^2), because the function stores all rows of Pascal’s Triangle up to numRows 
in the result array. Each row is an array of length i, where i is the row number, so the total amount of space used is proportional
 to the square of numRows.
 */