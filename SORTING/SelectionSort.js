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
        ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
      }
    }
    return arr
  }
  console.log(selectionSort([3, 5, 1, 2])) // [1, 2, 3, 5]

  /**
   * The time complexity of this function is O(n^2), where n is the length of arr, because it makes two nested loops through arr. 
   * The space complexity is O(1), because it uses a constant amount of space to store i, j, lowest, and a few variables.
   */