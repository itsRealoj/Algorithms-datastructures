function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length) {
            results.push(arr1[i])
            i++
        }

    while(j < arr2.length) {
        results.push(arr1[j])
        j++
    }
    return results;
}
merge([100,200], [1,2,3,5,6])

// result -> [1, 2, 3, 5, 6, 100, 200]
