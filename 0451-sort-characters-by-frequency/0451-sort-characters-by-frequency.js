/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
   let freqMap={};
    for(const val of s) {
       freqMap[val]? freqMap[val]++ : freqMap[val]=1;
    }
    const sortedvalues = Object.keys(freqMap).sort((a,b)=> freqMap[b]-freqMap[a]);
    let res="";
    for(const val of sortedvalues) {
      res += val.repeat(freqMap[val]);
    }
    return res;
};