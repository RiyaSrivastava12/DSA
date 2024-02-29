function findUnion(arr1,arr2){
    let set = new Set();
    let union = [];

    for(let num of arr1){
        set.add(num);
    }
    for(let num of arr2){
        set.add(num);
    }
    for(let num of set){
        union.push(num);
    }
    return union;
}


const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];

const union = findUnion(arr1, arr2);
console.log(union);