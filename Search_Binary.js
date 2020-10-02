//BINARY search uses divide and conquer technique.

function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,103,28,30], 103)



// ***BINARY SEARCH PSEUDOCODE****//
//===========================================================//

// This function accepts a SORTED ARRAY and a value
// Create a left pointer at the start and Right pointer at the end of the array.
// While the left pointer comes before the right pointer:
//  - Create a pointer in the middle
//  - If you find the value you want, return the index
//  - If the value is too small, move the left pointer up.
//  - If the value is too large, move the right pointer down.
// If you never find the value, return -1.