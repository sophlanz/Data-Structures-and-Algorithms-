function insertionSort(arr) {
    //sort in ascending order
    //loop through the unsorted region
    for(let i=1;i<arr.length;i++) {
        //get current element of unsorted region
        let current = arr[i]
        //loop through sorted region, starting with the element to the left of the current element,to find element that is greater than the current, this means we have to do a swap
        //if array[j] (the left) is greater than current (the right) we want to swap them
        for(var j=i-1;j>=0 && arr[j] > current ; j-- ) {
            //swap
            arr[j+1] = arr[j]
        }
       arr[j+1] = current
    }
    return arr;
}

module.exports = {
    insertionSort
};