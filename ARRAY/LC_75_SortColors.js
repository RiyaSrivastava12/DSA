function sortColors(nums){
    let low = 0, mid = 0, high = nums.length-1;
    while( mid <= high){
        if(nums[mid] == 0){
            swap(low,mid);
            low++;
            mid++;
            
        }
        else if(nums[mid] == 1){
            mid++
        }
        else if(nums[mid] == 2){
            swap(mid,high)
            high--;
        }
    }
    function swap(a,b) {
        [nums[b], nums[a]] = [nums[a], nums[b]]
    }
    return nums;
}


let nums = [2,0,2,1,1,0];
console.log(sortColors(nums));

/**
 * Start with three pointers: low, mid (both initialized to 0), and high (initialized to the last index of the array).
Enter a loop that continues until mid is greater than high.
Inside the loop, check the value at the mid index of the array:
If the value is 0, swap the values at the low and mid indices, then increment both low and mid.
If the value is 1, increment mid.
If the value is 2, swap the values at the mid and high indices, then decrement high.
Repeat the loop until mid is greater than high.
The array is now sorted with all 0s at the front, all 1s in the middle, and all 2s at the end.
 */