function merge(array1, array2) {
       //merge into ascending order
    let merged = [];
    while(array1.length || array2.length) {
        //if it's length is 0, we'll use infinity because we know it'll always be bigger
        let ele1 = array1.length ? array1[0] : Infinity;
        let ele2 = array2.length ? array2[0] : Infinity;
        let next;
        //comare the 2 elements
        if(ele1 > ele2) {
            //remove and return the first element
            next = array2.shift();
        } else {
            next = array1.shift();
        }
        merged.push(next);
    }
    return merged
}

function mergeSort(array) {
    //return array if length is 0 or 1
    if(array.length <=1) {
        return array;
    }
    //get mid, left and right
    let mid = Math.floor(array.length / 2 );
    let left = array.slice(0,mid);
    let right = array.slice(mid);
    //recursive call to sort the sides separately
    let leftSorted = mergeSort(left);
    let rightSorted= mergeSort(right);
    //merge the 2 sorted sides
    return merge(leftSorted,rightSorted);
}

module.exports = {
    merge,
    mergeSort
};
//time complexity, O (n log(n))
//log n from recursive calls required to completely split the array. 
//while loop in the merge function n.

//space complexity O(n)
//the recursive calls to continually divide the array until the base case is reached
//leads to linear space, the amount of sub arrays created depends on the length of the array. 