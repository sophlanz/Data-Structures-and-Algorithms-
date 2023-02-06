/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let freqMap = {};
   for(const num of arr) {
      freqMap[num] ? freqMap[num]++ : freqMap[num] =1; 
   }
 let freqValues = Object.values(freqMap).sort((a,b)=> a-b);
   let ocurrences = freqValues.length;
   
    for (const num of freqValues){
       if(k>= num) {
           k-=num
           ocurrences--
       }
        else {
           return ocurrences
        }
    }
    return ocurrences
};