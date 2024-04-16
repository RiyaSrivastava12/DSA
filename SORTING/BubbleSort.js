/**
 * Bubble sort algorithm is a simple sorting technique that compares two adjacent elements in an array and swaps them if they are in the wrong order.
 * It keeps repeating this process until the array is sorted.
 */

// Bubble sort Implementation using Javascript

// Creating the bblSort function
function bblSort(arr) {

	for (var i = 0; i < arr.length; i++) {

		// Last i elements are already in place 
		for (var j = 0; j < (arr.length - i - 1); j++) {

			// Checking if the item at present iteration 
			// is greater than the next iteration
			if (arr[j] > arr[j + 1]) {

				// If the condition is true
				// then swap them
				var temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}

	// Print the sorted array
	console.log(arr);
}

// This is our unsorted array
var arr = [234, 43, 55, 63, 5, 6, 235, 547];

// Now pass this array to the bblSort() function
bblSort(arr);

/**
 * Time Complexity: O(n^2), where n is the number of elements in the array. This is because there are two nested loops, and each element is compared with others multiple times.

Space Complexity: O(1), as the sorting is done in place and no additional storage is required beyond the temporary variable temp for swapping.
 */
