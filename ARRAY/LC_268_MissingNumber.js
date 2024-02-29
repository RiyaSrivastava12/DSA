
function missingNumber(arr){
    const n = arr.length;
    const sumFormula = n*(n+1)/2;
    const actualSum = arr.reduce((acc,num)=>acc+num,0)
    return sumFormula - actualSum;
}

let arr1 = [0,3,1];
console.log(missingNumber(arr1));