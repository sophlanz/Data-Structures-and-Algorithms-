/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
let freqMap = {};
    for(const val of arr) {
        freqMap[val]? freqMap[val]++ :freqMap[val]=1;
    }
    const freqIntegers = Object.values(freqMap).sort((a,b)=> b-a);
    let target = Math.floor(arr.length/2);
    let sum = 0;
    let idx=0;
    let count=0
    while(sum<target) {
        sum +=  freqIntegers[idx];
        count++
        idx++
    }
    return count;
};