function majorityElement(nums) {
    let hash = {};
    let res = 0;
    let majority = 0;
    for(let n of nums){
        hash[n] = 1 + (hash[n] || 0)
        if(hash[n]>majority){
            res = n;
            majority = hash[n];

        }
    }
 return res;
};
let nums = [2,2,6,1,6,5,1,6,1,2,6,6,2];
console.log(majorityElement(nums));

/**
 * let’s dry run the majorityElement function with the input nums = [2,2,1,1,1,2,2].

Here’s how it works:

The function starts by initializing an empty object hash to keep track of the count of each element in the array, a variable res to store the majority element, and a variable majority to store the maximum count seen so far.
It then iterates over the array nums. For each element n:
It increments the count of n in hash. If n is not already in hash, it defaults the count to 0 before incrementing it.
If the count of n in hash is greater than majority, it updates res to n and majority to the count of n.
Finally, the function returns res, which is the majority element in the array.
Now, let’s dry run the function:

Start with nums = [2,2,1,1,1,2,2], hash = {}, res = 0, and majority = 0.
For the first iteration, n = 2. Increment the count of 2 in hash to get hash = {2: 1}. Since hash[2] = 1 is greater than majority = 0, update res to 2 and majority to 1.
For the second iteration, n = 2. Increment the count of 2 in hash to get hash = {2: 2}. Since hash[2] = 2 is greater than majority = 1, update majority to 2.
For the third iteration, n = 1. Increment the count of 1 in hash to get hash = {1: 1, 2: 2}. Since hash[1] = 1 is not greater than majority = 2, res and majority remain the same.
For the fourth and fifth iterations, n = 1. Increment the count of 1 in hash to get hash = {1: 3, 2: 2}. Since hash[1] = 3 is greater than majority = 2, update res to 1 and majority to 3.
For the sixth and seventh iterations, n = 2. Increment the count of 2 in hash to get hash = {1: 3, 2: 4}. Since hash[2] = 4 is greater than majority = 3, update res to 2 and majority to 4.
At the end of the function, res = 2, which is the majority element in the array. So, the function majorityElement returns 2. 
 */