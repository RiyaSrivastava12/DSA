function printLeaders(arr,n){
    let max = arr[n-1];
    let ans = [];
    ans.push(arr[n-1]);
    for (let i = n-2; i>=0;i--){
        if(arr[i]>max){
            ans.push(arr[i]);
            max = arr[i];
        }
    }
    return ans;
}

let n = 6;
let arr = [10, 22, 12, 3, 0, 6];

let ans = printLeaders(arr, n);

for (let i = ans.length - 1; i >= 0; i--) {
    console.log(ans[i]); // 22 12 6
  }

  /**
   * Example 1:
Input:
 arr = [4, 7, 1, 0]
Output:
 7 1 0
Explanation:
 Rightmost element is always a leader. 7 and 1 are greater than the elements in their right side.

Example 2:
Input:
 arr = [10, 22, 12, 3, 0, 6]
Output:
 22 12 6
Explanation:
 6 is a leader. In addition to that, 12 is greater than all the elements in its right side (3, 0, 6), also 22 is greater than 12, 3, 0, 6.
   * 
   * In the above approach, we do a fresh traversal for each candidate. If we think carefully, we only want to compare the elements on the right side. So, what if we start from the last element?
That is, we’ll try to remember the greatest element encountered so far and we’ll use that to decide whether a candidate is a leader or not.
First, we’ll start the traversal from the right. Then, we move toward the left. Whenever we encounter a new element, we check with the greatest element obtained so far.
If the current element is greater than the greatest so far, then the current element is one of the leaders and we update the greatest element.
Else, we proceed with the further elements on the left. This method prints the leaders in the reverse direction of their occurrences. If we are concerned about the order, we can use an extra array or a string to order.

Time Complexity: O(N) { Since the array is traversed single time back to front, it will consume O(N) of time where N = size of the array }.

Space Complexity: O(N) { There is no extra space being used in this approach. But, a O(N) of space for ans array will be used in the worst case }.
   */
