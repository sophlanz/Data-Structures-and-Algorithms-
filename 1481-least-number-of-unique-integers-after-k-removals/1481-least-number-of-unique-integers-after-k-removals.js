/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let freqMap = new Map();
    arr.forEach((num)=> freqMap[num] ? freqMap[num]++ : freqMap[num]=1);
    let occurences = Array.from(Object.values(freqMap));
    occurences.sort((a,b)=> a-b);
    let res = occurences.length;
    for(const num of occurences) {
        if(k>=num) {
            k -= num;
            res--
        }else {
            return res;
        }
    }
    return res;
    
};