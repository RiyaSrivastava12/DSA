
function searchElement(arr,num){
    for(let i =0; i<=arr.length-1;i++)
    {
        if(arr[i] == num)
        {
            return i;
        } 
    }
    return -1
}


let arr= [1, 2, 3, 4, 5], num = 5;
console.log(searchElement(arr,num)); // 4 (index of 5 is 4)