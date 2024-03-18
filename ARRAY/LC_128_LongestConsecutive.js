


function longestSuccessiveElements(a) {
    let n = a.length;
    if (n === 0)
        return 0;

    let longest = 1;
    let st = new Set();
    
    // put all the array elements into set
    for (let i = 0; i < n; i++) {
        st.add(a[i]);
    }

    // Find the longest sequence
    for (let it of st) {
        // if 'it' is a starting number
        if (!st.has(it - 1)) {
            // find consecutive numbers
            let cnt = 1;
            let x = it;
            while (st.has(x + 1)) {
                x = x + 1;
                cnt = cnt + 1;
            }
            longest = Math.max(longest, cnt);
        }
    }
    return longest;
}

let a = [100, 200, 1, 2, 3, 4];
let ans = longestSuccessiveElements(a);
console.log("The longest consecutive sequence is", ans);

/**
 * Time Complexity: O(N) + O(2*N) ~ O(3*N), where N = size of the array.
Reason: O(N) for putting all the elements into the set data structure. After that for every starting element, we are finding the consecutive elements. Though we are using nested loops, the set will be traversed at most twice in the worst case. So, the time complexity is O(2*N) instead of O(N2).

Space Complexity: O(N), as we are using the set data structure to solve this problem.

Note: The time complexity is computed under the assumption that we are using unordered_set and it is taking O(1) for the set operations. 

If we consider the worst case the set operations will take O(N) in that case and the total time complexity will be approximately O(N2). 
And if we use the set instead of unordered_set, the time complexity for the set operations will be O(logN) and the total time complexity will be O(NlogN).


It first checks if the array is empty. If so, it returns 0.
It initializes longest to 1 and creates a new Set st.
It then adds all elements of the array to the Set st. This helps in achieving faster lookups later.
It then iterates over each element in the Set. For each element, it checks if it’s the start of a sequence. An element is considered the start of a sequence if the Set does not contain its previous number (it - 1).
If the element is the start of a sequence, it then finds the length of the sequence by continuously checking if the next number (x + 1) is in the Set, incrementing the count cnt and the number x each time.
It keeps track of the longest sequence found so far in the variable longest.
Finally, it returns the length of the longest sequence.
In the given example, the array is [100, 200, 1, 2, 3, 4]. The longest consecutive sequence is [1, 2, 3, 4], so the function returns 4


let’s dry run the function longestSuccessiveElements with the input array a = [100, 200, 1, 2, 3, 4].

Initialize n = 6 (length of a), longest = 1, and st = new Set().
Add all elements of a to st. So, st = {100, 200, 1, 2, 3, 4}.
Now, iterate over each element in st:
For it = 100: st does not contain 99 (which is 100 - 1), so 100 is the start of a sequence. But st does not contain 101 (which is 100 + 1), so the sequence ends here. The length of this sequence is 1, so longest remains 1.
For it = 200: Similarly, 200 is the start of a sequence, but there are no other numbers in the sequence. So, longest remains 1.
For it = 1: st does not contain 0 (which is 1 - 1), so 1 is the start of a sequence. st contains 2 (which is 1 + 1), so the sequence continues. Similarly, st contains 3 and 4, so the sequence ends at 4. The length of this sequence is 4, so longest is updated to 4.
For it = 2, 3, and 4: st contains it - 1, so these are not the start of a sequence. So, longest remains 4.
Finally, return longest, which is 4.
 */