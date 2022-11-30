function quickSort(array) {
    //if its array lenght of 1 or 0 just return it
    if (array.length <=1) {
        return array;
    }
    //pick a pivot, and remove it from the array
    let pivot = array.shift();
    //get what we want to be the right and left sides of the pivots
    let left = array.filter(ele => ele < pivot);
    let right = array.filter(ele => ele >= pivot);
    //recursive call
    let sortedLeft = quickSort(left);
    let sortedRight = quickSort(right);
    return [...sortedLeft,pivot,...sortedRight];
 }


module.exports = {
    quickSort
};
//time complexity 
//best case, we chose the mid O(nlogn)
//worst case, we chose the min or max O(n^2)
//space complexity O(n) due to the partition arrays