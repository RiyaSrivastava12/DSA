/**
 * Selection sort works by going up an array and selecting the minimum value. The minimum value is then moved to the beginning of 
 * the array. The left side of the array becomes more sorted at the end of each pass through the array, until the whole array is 
 * sorted.

 * It’s similar to Bubble Sort, but instead of the largest values “bubbling” to the top, the smallest values are selected and 
   placed at the beginning.
 */


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let lowest = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
          lowest = j
        }
      }
      if (lowest !== i) {
        // Swap
        [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
      }
    }
    return arr
  }
  console.log(selectionSort([3, 5, 1, 2])) // [1, 2, 3, 5]

  /**
   * The time complexity of this function is O(n^2), where n is the length of arr, because it makes two nested loops through arr. 
   * The space complexity is O(1), because it uses a constant amount of space to store i, j, lowest, and a few variables.
   * 
   * for (let i = 0; i < arr.length; i++) { ... }: This for loop iterates over each element in the array. For each iteration, it finds the smallest element in the unsorted part of the array and swaps it with the first unsorted element.
let lowest = i: This line initializes lowest as i. lowest is the index of the smallest element in the unsorted part of the array.
for (let j = i + 1; j < arr.length; j++) { ... }: This inner for loop iterates over the unsorted part of the array.
if (arr[j] < arr[lowest]) { lowest = j }: If the current element is smaller than the smallest element found so far, it updates lowest to the current index.
if (lowest !== i) { [arr[i], arr[lowest]] = [arr[lowest], arr[i]] }: If the smallest element is not the first unsorted element, it swaps them.
return arr: After all iterations, the function returns the sorted array.
Let’s dry run this function with arr = [3, 5, 1, 2]:

First Iteration (i = 0): lowest is 0. The inner loop finds that arr[2] = 1 is smaller than arr[0] = 3, so lowest becomes 2. Since lowest is not 0, it swaps arr[0] and arr[2], making arr = [1, 5, 3, 2].
Second Iteration (i = 1): lowest is 1. The inner loop finds that arr[3] = 2 is smaller than arr[1] = 5, so lowest becomes 3. Since lowest is not 1, it swaps arr[1] and arr[3], making arr = [1, 2, 3, 5].
Third Iteration (i = 2): lowest is 2. The inner loop finds that arr[2] = 3 is not smaller than arr[2] = 3, so lowest remains 2. Since lowest is 2, it does not swap any elements.
Fourth Iteration (i = 3): lowest is 3. Since there are no more elements, the inner loop is skipped. Since lowest is 3, it does not swap any elements.
After these iterations, arr = [1, 2, 3, 5], which is sorted in ascending order.

So, if arr = [3, 5, 1, 2], selectionSort(arr) would return [1, 2, 3, 5].
   */