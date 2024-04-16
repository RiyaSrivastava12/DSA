/**
 * Insertion Sort works by comparing an element with the elements to its left, 
 * until it reaches an element that is smaller than it; the element is then inserted in front of the smaller element.
 */

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i]
      let j
      for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = currentValue
    }
    return arr
  }
  console.log(insertionSort([2, 1, 3, 7, 5])) // [1, 2, 3, 5, 7]

  /**
   * Time Complexity: The worst-case scenario for time complexity is O(n^2), which occurs when the input array is sorted in reverse order. This is because for each element, the function may have to compare it with all the other elements that came before it. In the best-case scenario, where the input array is already sorted, the time complexity is O(n) because the inner loop will not be executed.
Space Complexity: The space complexity is O(1), which means it uses constant extra space. This is because the sorting takes place in-place, or within the array itself, and does not require any additional space that scales with the size of the input.
Please note that while insertion sort is efficient for small arrays or for arrays that are nearly sorted, other sorting algorithms like quicksort or mergesort are generally more efficient for larger or unsorted arrays
  
let’s dry run the insertionSort function with the array [2, 1, 3, 7, 5].

Initialization: We start with i = 1 (since the first element alone is already sorted). The currentValue is 1 (the second element of the array).
First Iteration (i = 1): We enter the inner loop with j = 0. Since arr[j] (which is 2) is greater than currentValue (1), we move arr[j] one position to the right, making the array [2, 2, 3, 7, 5]. As j becomes -1 and is no longer >= 0, we exit the inner loop and place currentValue (1) at arr[j+1] to get [1, 2, 3, 7, 5].
Second Iteration (i = 2): currentValue is 3. Since 3 is not less than 2, we skip the inner loop and the array remains [1, 2, 3, 7, 5].
Third Iteration (i = 3): currentValue is 7. Again, 7 is not less than 3, so we skip the inner loop and the array remains [1, 2, 3, 7, 5].
Fourth Iteration (i = 4): currentValue is 5. We enter the inner loop with j = 3. Since arr[j] (which is 7) is greater than currentValue (5), we move arr[j] one position to the right, making the array [1, 2, 3, 7, 7]. Now j = 2, and since arr[j] (3) is not greater than currentValue (5), we exit the inner loop and place currentValue (5) at arr[j+1] to get [1, 2, 3, 5, 7].
End of the Function: We’ve finished iterating through the array. The final sorted array is [1, 2, 3, 5, 7].
So, the insertionSort function sorts the array in-place by iterating through the array, comparing each element with its previous elements, and shifting those that are larger one position to the right. This continues until it finds an element that is not larger, at which point it inserts the current element before it. This process repeats for each element in the array (except the first one), resulting in a sorted array.

*/