function findLargest(num){
    let largest = num[0];
    for(let i = 0;i<num.length;i++)
    {
        if(num[i]> largest)
        {
            largest = num[i];
        }
    }
    return largest;
}



let arr = [2, 7, 11, 15,0,22,20,1];
console.log(findLargest(arr)); // Output: 22
