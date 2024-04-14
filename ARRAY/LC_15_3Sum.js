/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
 */




function triplet(n, arr) {
    let ans = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        // remove duplicates:
        if (i !== 0 && arr[i] === arr[i - 1]) continue;

        // moving 2 pointers:
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                let temp = [arr[i], arr[j], arr[k]];
                ans.push(temp);
                j++;
                k--;
                // skip the duplicates:
                while (j < k && arr[j] === arr[j - 1]) j++;
                while (j < k && arr[k] === arr[k + 1]) k--;
            }
        }
    }
    return ans;
}

let arr = [-1, 0, 1, 2, -1, -4];
let n = arr.length;
let ans = triplet(n, arr);
console.log(ans); // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]

for (let it of ans) {
    process.stdout.write("[");
    for (let i of it) {
        process.stdout.write(i + " ");
    }
    process.stdout.write("] ");
}
console.log(); // [-1 -1 2 ] [-1 0 1 ]

/**
 * Time Complexity: O(NlogN)+O(N2), where N = size of the array.
Reason: The pointer i, is running for approximately N times. And both the pointers j and k combined can run for approximately 
N times including the operation of skipping duplicates. So the total time complexity will be O(N2). 

Space Complexity: O(no. of quadruplets), This space is only used to store the answer. We are not using any extra space to solve 
this problem. So, from that perspective, space complexity can be written as O(1).


Approach:
The steps are as follows:

First, we will sort the entire array.
We will use a loop(say i) that will run from 0 to n-1. This i will represent the fixed pointer. In each iteration, this value will be fixed for all different values of the rest of the 2 pointers. Inside the loop, we will first check if the current and the previous element is the same and if it is we will do nothing and continue to the next value of i.
After that, there will be 2 moving pointers i.e. j(starts from i+1) and k(starts from the last index). The pointer j will move forward and the pointer k will move backward until they cross each other while the value of i will be fixed.
Now we will check the sum i.e. arr[i]+arr[j]+arr[k].
If the sum is greater, then we need lesser elements and so we will decrease the value of k(i.e. k--). 
If the sum is lesser than the target, we need a bigger value and so we will increase the value of j (i.e. j++). 
If the sum is equal to the target, we will simply insert the triplet i.e. arr[i], arr[j], arr[k] into our answer and move the pointers j and k skipping the duplicate elements(i.e. by checking the adjacent elements while moving the pointers).
Finally, we will have a list of unique triplets.
 */