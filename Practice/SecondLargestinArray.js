function find2ndLargest(num){
    largest = -Infinity;
    largest2nd = -Infinity;
    for(let i = 0;i<num.length;i++)
    {
        if(num[i]>largest)
        {
            largest2nd = largest;
            largest = num[i];
        }
        else if(num[i]>largest2nd && num[i]<largest)
        {
            largest2nd = num[i];
        }
    }
    return largest2nd;
}



let arr = [2, 7, 11, 15,0,22,20,1];
console.log(find2ndLargest(arr)); // 20