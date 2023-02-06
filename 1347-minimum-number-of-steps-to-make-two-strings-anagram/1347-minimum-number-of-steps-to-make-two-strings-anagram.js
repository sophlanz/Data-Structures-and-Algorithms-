/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let freqMap={}
  for(let i=0;i<s.length;i++){
      freqMap[s[i]] ? freqMap[s[i]]++ : freqMap[s[i]] =1;
      freqMap[t[i]] ? freqMap[t[i]]-- : freqMap[t[i]]=-1
  }
    const values = Object.values(freqMap);
    let count =0
    for (const val of values) {
        if(val >0) count+= val
    }
    return count;
};