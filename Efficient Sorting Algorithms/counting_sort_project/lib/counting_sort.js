function countingSort(arr, max) {
    //we'll push the sorted numbers here
    const result = [];
    //create array of max +1 to represent the integers, this will be the counter array
    const counters = new Array(max+1).fill(0);
    //loop through the array, and increase the counter of it's corresponding index
    for(let i=0; i<arr.length;i++) {
        counters[arr[i]]++;
    }
    //loop through the counters array and push the index to the result array
    for(let i=0; i<counters.length;i++) {
        while(counters[i] > 0) {
            result.push(i)
            counters[i]--;
        }
    }
    return result;
}



module.exports = {
    countingSort
};