/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
     let freqMap = new Map();
     for(const val of arr) {
         if(!freqMap.get(val)) freqMap.set(val,1)
         else freqMap.set(val,freqMap.get(val)+1)
     }
 const countPairs=[...freqMap].sort((a,b)=> b[1]-a[1]);
    let target = arr.length/2
  let idx=0;
    let count=0;
    let sum=0;
    while(sum<target) {
        sum+=countPairs[idx][1];
        idx++
        count++
    }
    return count;
};