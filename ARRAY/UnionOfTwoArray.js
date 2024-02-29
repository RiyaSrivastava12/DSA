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

/**
 * Time Compleixty : O( (m+n)log(m+n) ) . Inserting an element in a set takes logN time, where N is no of elements in the set. At max set can store m+n elements {when there are no common elements and elements in arr,arr2 are distntict}. So Inserting m+n th element takes log(m+n) time. Upon approximation across inserting all elements in worst, it would take O((m+n)log(m+n) time.

Using HashSet also takes the same time, On average insertion in unordered_set takes O(1) time but sorting the union vector takes O((m+n)log(m+n))  time. Because at max union vector can have m+n elements.

Space Complexity : O(m+n) {If Space of Union ArrayList is considered} 

O(1) {If Space of union ArrayList is not considered}
 */