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