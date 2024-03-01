
function missingNumber(arr){
    const n = arr.length;
    const sumFormula = n*(n+1)/2;
    const actualSum = arr.reduce((acc,num)=>acc+num,0)
    return sumFormula - actualSum;
}

let arr1 = [0,3,1];
console.log(missingNumber(arr1)); // 2

/**
 * Complexity
Time complexity:
O(n)

Space complexity:
O(1)


Another ways:-
var missingNumber = function (nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    actualSum = actualSum + nums[i]
  }
  
  return expectedSum-actualSum
};

 */