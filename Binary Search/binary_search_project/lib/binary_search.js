function binarySearch(array, target) {
    if(array.length === 0) {
        return false
    }
    let midIdx = Math.floor(array.length/2);
    let left = array.slice(0,midIdx);
    let right = array.slice(midIdx+1);
    if(target > array[midIdx]) {
       return binarySearch(right,target);
    } else if (target < array[midIdx]) {
        return binarySearch(left,target)
    } else {
        return true;
    }
}
//time complexity O(logn) due to splitting the array recursively
//space complexity O(n) due to hald arrays created from slicing the array into parts

function binarySearchIndex(array, target, lo=0, hi= array.length-1) {
    if(lo===hi) {
        return -1
    }
    let midIdx = Math.floor((lo + hi)/2);
   
    if(target > array[midIdx]) {
       return binarySearchIndex(array,target,midIdx +1,hi);
    } else if (target < array[midIdx]) {
       return binarySearchIndex(array,target, lo, midIdx)
    } else {
        return midIdx;
    }
}

module.exports = {
    binarySearch,
    binarySearchIndex
};