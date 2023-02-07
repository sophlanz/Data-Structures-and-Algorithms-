/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let freqMap = {};
    for(const val of arr) {
        freqMap[val] ? freqMap[val]++ : freqMap[val]=1;
    }
    const values = Object.values(freqMap).sort((a,b)=> a-b);
    let length = values.length;
    for(const val of values) {
        if(k>= val) {
            k-= val;
            length--
        }else {
            return length;
        }
    }
    return length
};