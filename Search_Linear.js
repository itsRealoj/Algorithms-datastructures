function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

linearSearch([34,51,1,100, 2,3,45,56,687], 100);

/*LINEAR SEARCH PSEUDOCODE*/
//**************************************//
/*
1. This function accepts an array and a value.
2. Loop through the array and check if the current array element is equal to the value.
3. If it is, return the index at which the element is found.
4. If the value is never found, return -1.
*/


