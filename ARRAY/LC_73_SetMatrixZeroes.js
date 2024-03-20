function zeroMatrix(matrix)
{
    const n = matrix.length;
    const m = matrix[0].length;

    let col0 = 1;
    // // Step 1: Traverse the matrix and mark 1st row & col accordingly:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                // Mark i-th row:
                matrix[i][0] = 0;

                // Mark j-th column:
                if (j !== 0) {
                    matrix[0][j] = 0;
                } else {
                    col0 = 0;
                }
            }
        }
    }
    // Step 2: Mark with 0 from (1,1) to (n-1, m-1):
    for (let i = 1; i<n; i++ ){
        for (let j = 1; j<m; j++){
            if(matrix[i][j] !== 0){
                if(matrix[i][0] == 0 || matrix[0][j] == 0){
                    matrix[i][j] = 0 ;
                }
            }
        }
    }

     // Step 3: Finally mark the 1st col & then 1st row:
     if (matrix[0][0] === 0) {
        for (let j = 0; j < m; j++) {
            matrix[0][j] = 0;
        }
    }
    if (col0 === 0) {
        for (let i = 0; i < n; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
}

const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
const ans = zeroMatrix(matrix);

console.log("The Final matrix is:");
for (const row of ans) {
    console.log(row.join(" "));
}   

/**
 * Time Complexity: O(2*(N*M)), where N = no. of rows in the matrix and M = no. of columns in the matrix.
Reason: In this approach, we are also traversing the entire matrix 2 times and each traversal is taking O(N*M) time complexity.
 
This JavaScript function zeroMatrix takes a 2D array matrix as input and modifies it such that if a cell in the matrix is 0, all the cells in its row and column are set to 0. This function does this in-place, i.e., it doesn’t create a new matrix but modifies the existing one. Here’s how it works:

Initialize Variables: The function first initializes the number of rows n and columns m in the matrix. It also creates a variable col0 and sets it to 1. This variable is used to keep track of whether the first column should be set to 0.
Identify Zeros: The function then traverses the matrix. If it finds a cell with value 0, it sets the first cell of that cell’s row and the first cell of that cell’s column to 0. If the cell is in the first column, it sets col0 to 0.
Set Zeros for Non-First Rows and Columns: The function then traverses the matrix again, starting from the cell at (1, 1). For each cell, if the first cell of its row or the first cell of its column is 0, it sets the cell value to 0.
Set Zeros for First Row and Column: Finally, if the first cell of the matrix is 0, it sets all cells in the first row to 0. If col0 is 0, it sets all cells in the first column to 0.
Now, let’s dry run this function with the given matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]:

Initialize n = 3, m = 3, and col0 = 1.
Traverse the matrix:
For i = 0, j = 0 to 2: All cells have value 1, so the first row and column remain the same.
For i = 1, j = 0 to 2: The cell at i = 1, j = 1 has value 0, so set matrix[1][0] = 0 and matrix[0][1] = 0. Since j = 1 is not 0, col0 remains 1.
For i = 2, j = 0 to 2: All cells have value 1, so the first row and column remain the same.
Now, matrix = [[1, 0, 1], [0, 0, 1], [1, 0, 1]] and col0 = 1.
Traverse the matrix again, starting from i = 1, j = 1:
For i = 1, j = 1 to 2: matrix[1][0] is 0, so set matrix[1][j] = 0.
For i = 2, j = 1 to 2: matrix[2][0] and matrix[0][j] are 1, so the cells remain the same.
Now, matrix = [[1, 0, 1], [0, 0, 0], [1, 0, 1]].
Since matrix[0][0] is 1 and col0 is 1, the first row and column remain the same.
Finally, matrix = [[1, 0, 1], [0, 0, 0], [1, 0, 1]].
So, the function zeroMatrix(matrix) returns [[1, 0, 1], [0, 0, 0], [1, 0, 1]], which is the matrix with the entire row and column set to zero if a cell in that row or column contains zero. 



*/