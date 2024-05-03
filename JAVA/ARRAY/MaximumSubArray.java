//LC_53_MaximumSubArray

class MaximumSubArray{
    public int maxSum(int[] nums){
        int maxSum = nums[0];
        for(int i = 1; i<nums.length-1; i++){
            nums[i] =Math.max(0, nums[i-1] + nums[i]);
            if(nums[i] > maxSum){
                maxSum = nums[i];
            }

        }
        return maxSum;
    }

    public static void main(String[] args) {
      
      MaximumSubArray ms = new MaximumSubArray();
      int arr1[] =  {-2,1,-3,4,-1,2,1,-5,4};
      System.out.println(ms.maxSum(arr1)); // 6
    }}

    /**
     * Initialize maxSum as the first element of the array.
Iterate over the array starting from the second element (index 1).
For each element, update it to be the maximum of 0 and the sum of the current element and the previous one. This is done using nums[i] = Math.max(0, nums[i-1] + nums[i]).
If the updated current element is greater than maxSum, update maxSum to be the current element.
After iterating through the entire array, return maxSum which now contains the maximum sum of a contiguous subarray.
Now, let’s do a dry run with the given array:

For i=1, nums[1] becomes Math.max(0, -2+1) = 0, and maxSum remains -2.
For i=2, nums[2] becomes Math.max(0, 0-3) = 0, and maxSum remains -2.
For i=3, nums[3] becomes Math.max(0, 0+4) = 4, and maxSum becomes 4.
For i=4, nums[4] becomes Math.max(0, 4-1) = 3, and maxSum remains 4.
For i=5, nums[5] becomes Math.max(0, 3+2) = 5, and maxSum remains 4.
For i=6, nums[6] becomes Math.max(0, 5+1) = 6, and maxSum becomes 6.
For i=7, nums[7] becomes Math.max(0, 6-5) = 1, and maxSum remains 6.
For i=8, nums[8] becomes Math.max(0, 1+4) = 5, and maxSum remains 6.
     * 
     */
