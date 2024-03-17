function arraySign(nums){
    let v1 = [];
    let v2 = [];
    let ans = [];
    for(let num of nums){
        if(num>0){
            v1.push(num);
        }
        else{
            v2.push(num);
        }
    }

    let ind1 = 0;
    let ind2 = 0;
    while(ind2< nums.length/2){
        ans.push(v1[ind1]);
        ind1++;
        ans.push(v2[ind2]);
        ind2++;
    }
    return ans;
}

let nums = [3,1,-2,-5,2,-4];
console.log(arraySign(nums)); // [ 3, -2, 1, -5, 2, -4 ]

/**
 * Complexity
Time complexity:
O(n)

Space complexity:
O(n)

It creates three empty arrays: v1, v2, and ans.
It iterates over the nums array. If a number is greater than 0, it’s added to v1. Otherwise, it’s added to v2.
It then starts filling the ans array by alternately taking elements from v1 and v2. This is done until half the length of the nums array is reached in ans.
Finally, it returns the ans array.
 */