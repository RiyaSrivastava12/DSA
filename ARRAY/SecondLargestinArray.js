function find2ndLargest(num){
    
    let largest = num[0];
    let secondLargest = num[1];
    for(let i =0;i<num.length;i++)
    {
        if(num[i]>largest)
        {
            secondLargest = largest;
            largest = num[i];
        }
        else if(num[i]>secondLargest && num[i]<largest)
        {
            secondLargest = num[i];
        }
    }
    return secondLargest;
   
}

let arr = [2, 7, 11, 15,0,22,20,1];
console.log(find2ndLargest(arr)); // 20

/*
In JavaScript, Infinity is a special numeric value that represents infinity1. It’s greater than any other number1.

-Infinity is the opposite: it represents negative infinity and is less than any other number1.

This approach is efficient because it only requires a single pass through the array (O(n) time complexity) and uses a constant amount of space (O(1) space complexity)

Another Approach :

function findSecondLargest(nums) {
    let sortedNums = [...nums].sort((a, b) => b - a);
    return sortedNums[1];
}

let arr = [2, 7, 11, 15];
console.log(findSecondLargest(arr)); // Output: 11




*/