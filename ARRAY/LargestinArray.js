function findLargest(nums) {
    let largest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }
    return largest;
}

let arr = [2, 7, 11, 15,0,22,20,1];
console.log(findLargest(arr)); // Output: 15

/*
This approach has a time complexity of O(n) and a space complexity of O(1)

In this code:

We initialize largest to the first element of the array.
We then loop through the rest of the array. If we find an element that is larger than largest, we update largest.
After going through all the elements, largest will hold the largest element in the array12.
This approach is efficient because it only requires a single pass through the array (O(n) time complexity) and uses a constant amount of space (O(1) space complexity)
*/