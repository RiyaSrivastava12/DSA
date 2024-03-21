function rotate(matrix) {
    let n = matrix.length;
    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    // Reverse each row
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - j - 1];
            matrix[i][n - j - 1] = temp;
        }
    }
}

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(arr);
console.log("Rotated Image:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].join(" "));
}


/***
 * Initialize n = 3.
Transpose the matrix:
For i = 0 to 2:
For j = i to 2:
Swap matrix[i][j] and matrix[j][i].
After the transpose, matrix = [[1, 4, 7], [2, 5, 8], [3, 6, 9]].
Reverse each row:
For i = 0 to 2:
For j = 0 to 1:
Swap matrix[i][j] and matrix[i][n - j - 1].
After reversing each row, matrix = [[7, 4, 1], [8, 5, 2], [9, 6, 3]].
So, the function rotate(matrix) modifies matrix to [[7, 4, 1], [8, 5, 2], [9, 6, 3]], which is the original matrix rotated 90 degrees clockwise.

Now, let’s analyze the time and space complexity of this function:

Time Complexity: The function traverses each cell in the matrix exactly twice (once to transpose the matrix and once to reverse each row), so the time complexity is O(n^2), where n is the number of rows (or columns) in the matrix.
Space Complexity: The function uses a constant amount of space to store the temporary variable temp and does not use any additional data structures whose size depends on the input, so the space complexity is O(1). This means the function is space-efficient and can handle large matrices given enough time. Let me know if you need help with anything else! 😊



 */