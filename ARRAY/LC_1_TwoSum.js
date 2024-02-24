// var twoSum = function(nums, target) {
//     for(let i = 0; i<nums.length; i++)
//     {
//         for(let j=1; j<nums.length; j++)
//         {
//              if(nums[i]+nums[j]==target)
//              {
//                  return [i,j];
//              }
//         }
       
//     }
// };

// let nums = [2,7,11,15]; let target = 9;
// console.log(twoSum(nums,target)); // [0,1]

/**
 * 
 * The time complexity of the provided code is O(n²).

Here’s why:

The function twoSum uses two nested loops to iterate over the nums array. In the worst-case scenario, each element in the array is paired and compared with every other element. This results in a quadratic number of operations relative to the size of the input array.

In Big O notation, this is represented as O(n²), where n is the number of elements in the array. This means that the time complexity grows quadratically with the size of the input, making this approach less efficient for large inputs.
 */

//Best approach


var twoSum = function(nums, target) {
    let mp = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        
        if (mp.has(diff)) {
            return [i, mp.get(diff)]
        }
        
        mp.set(nums[i], i)
    }
};
let nums = [2,7,11,15]; let target = 9;
console.log(twoSum(nums,target)); // [0,1]

// Complexity
// Time complexity: O(n) - worse case, there are no pairs and we iterate over every single item; fetching items from a map is 0(1)

// Space complexity: O(n) - we are using map to store the pairs

/**
 * This code defines a function twoSum that takes an array of numbers (nums) and a target number (target). The function is designed to find two numbers in the array that add up to the target number.

Here’s how it works:

>Create a Map: A new Map mp is created to store the numbers from the array as keys and their indices as values.
let mp = new Map()

>Iterate Over the Array: The function then iterates over the nums array.
for (let i = 0; i < nums.length; i++) {

>Calculate the Difference: For each number, it calculates the difference between the target number and the current number.
let diff = target - nums[i]

>Check if the Difference Exists in the Map: If the difference is found in the map, it means that there are two numbers in the array that add up to the target number. In this case, the function returns an array containing the current index and the index of the other number (retrieved from the map).
if (mp.has(diff)) {
    return [i, mp.get(diff)]
}

>Store the Number and its Index in the Map: If the difference is not found in the map, the function adds the current number and its index to the map.
mp.set(nums[i], i)

>Test the Function: The function is then tested with an array of numbers and a target number. The result is logged to the console.
let nums = [2,7,11,15]; let target = 9;
console.log(twoSum(nums,target));

In this case, the function should return [1, 0] because the numbers at indices 1 and 0 in the array (7 and 2) add up to the target number 9.

This function uses a single-pass hash table approach, which gives it a time complexity of O(n), where n is the number of elements in the array. This makes it an efficient solution for the two-sum problem.
 */