function removeDuplicate(nums){
  if(nums.length === 0)
  {
    return 0;
  }
  let k = 1;
  for (let i = 1 ; i<nums.length; i++)
  {
    if(nums[i] !== nums[k-1])
    {
        nums[k]=nums[i]
        k++
    }
  }
  return k;
}

let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicate(nums)); //5

/**
 * Initialize k = 1. This is the count of unique elements in the array.
Start a loop from the second element (index i = 1) to the end of the array.
If the current element nums[i] is not equal to the previous unique element nums[k - 1], then:
Overwrite the next unique element nums[k] with the current element nums[i].
Increment k by 1.
Return k, which is the count of unique elements in the array.

Complexity
Time complexity:
The time complexity of this algorithm is O(n), where n is the number of elements in the input vector nums. This is because we iterate through the input vector once, and each iteration takes constant time.

Space complexity:
The space complexity of this algorithm is O(1) because it modifies the input array in-place without using any additional data structures that depend on the size of the input.

another approach

var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}


dry run :-

Sure, let’s go through the removeDuplicate function again with the input nums = [0,0,1,1,1,2,2,3,3,4], and this time I’ll show the array after each step.

Start with nums = [0,0,1,1,1,2,2,3,3,4] and k = 1.
For i = 1, nums[i] = 0 is equal to nums[k - 1] = 0, so continue to the next iteration. The array remains [0,0,1,1,1,2,2,3,3,4].
For i = 2, nums[i] = 1 is not equal to nums[k - 1] = 0, so set nums[k] = 1 and increment k to 2. The array becomes [0,1,1,1,1,2,2,3,3,4].
For i = 3 and i = 4, nums[i] = 1 is equal to nums[k - 1] = 1, so continue to the next iteration. The array remains [0,1,1,1,1,2,2,3,3,4].
For i = 5, nums[i] = 2 is not equal to nums[k - 1] = 1, so set nums[k] = 2 and increment k to 3. The array becomes [0,1,2,1,1,2,2,3,3,4].
For i = 6, nums[i] = 2 is equal to nums[k - 1] = 2, so continue to the next iteration. The array remains [0,1,2,1,1,2,2,3,3,4].
For i = 7, nums[i] = 3 is not equal to nums[k - 1] = 2, so set nums[k] = 3 and increment k to 4. The array becomes [0,1,2,3,1,2,2,3,3,4].
For i = 8, nums[i] = 3 is equal to nums[k - 1] = 3, so continue to the next iteration. The array remains [0,1,2,3,1,2,2,3,3,4].
For i = 9, nums[i] = 4 is not equal to nums[k - 1] = 3, so set nums[k] = 4 and increment k to 5. The array becomes [0,1,2,3,4,2,2,3,3,4].
At the end of the function, k = 5, which is the count of unique elements in the array. So, the function removeDuplicate returns 5. The array nums is modified to [0,1,2,3,4,...]

 */

