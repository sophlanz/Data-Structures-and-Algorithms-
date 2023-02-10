/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let freqMap = {};
    for(const num of arr) {
        freqMap[num] ? freqMap[num]++ : freqMap[num]=1;
    }
   let values= Object.values(freqMap).sort((a,b)=> b-a);
    console.log(values)
    let count=0;
    let target = arr.length/2;
    let idx=0
    let sum=0;
    while(target>sum) {
        sum += values[idx];
        count++
        idx++
    }
    return count
    
};