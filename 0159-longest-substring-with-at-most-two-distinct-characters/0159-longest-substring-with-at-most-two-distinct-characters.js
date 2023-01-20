/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
  let start = 0,
      freqMap={},
      maxLen=0;
    for(let end=0;end<s.length;end++) {
        const rChar = s[end];
        freqMap[rChar] ? freqMap[rChar]++ : freqMap[rChar] = 1;
        while(Object.keys(freqMap).length >2) {
            let lChar = s[start];
            freqMap[lChar]--;
            if(freqMap[lChar]===0) delete freqMap[lChar]
            start++
        }
        maxLen = Math.max(maxLen, end-start+1)
    }
    return maxLen;
};