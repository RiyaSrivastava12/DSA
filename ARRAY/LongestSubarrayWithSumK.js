


function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let left = 0, right = 0; // 2 pointers
    let sum = a[0];
    let maxLen = 0;
    while (right < n) {
        // if sum > k, reduce the subarray from left
        // until sum becomes less or equal to k
        while (left <= right && sum > k) {
            sum -= a[left];
            left++;
        }

        // if sum = k, update the maxLen i.e. answer
        if (sum === k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }

        // Move forward the right pointer
        right++;
        if (right < n) sum += a[right];
    }

    return maxLen;
}

let a = [2, 3, 5, 1, 9];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len); // 3



/**
 * Time Complexity: O(2*N), where N = size of the given array.
Reason: The outer while loop i.e. the right pointer can move up to index n-1(the last index). Now, the inner while loop i.e. the left pointer can move up to the right pointer at most. So, every time the inner loop does not run for n times rather it can run for n times in total. So, the time complexity will be O(2*N) instead of O(N2).

Space Complexity: O(1) as we are not using any extra space.

Space Complexity: O(1) as we are not using any extra space.


We are using two pointers i.e. left and right. The left pointer denotes the starting index of the subarray and the right pointer
denotes the ending index. Now as we want the longest subarray, we will move the right pointer in a forward direction every time 
adding the element i.e. a[right] to the sum. But when the sum of the subarray crosses k, we will move the left pointer in the 
forward direction as well to shrink the size of the subarray as well as to decrease the sum. Thus, we will consider the length of
 the subarray whenever the sum becomes equal to k.
 */