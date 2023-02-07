/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
  let freqMap = {};
    let start=0
    let maxLen=0;
    for(let end=0;end<s.length;end++) {
        let char = s[end];
        freqMap[char] ? freqMap[char]++ : freqMap[char]=1;
        while(Object.keys(freqMap).length >2) {
            let lChar = s[start];
            freqMap[lChar]--;
            if(freqMap[lChar]===0) delete freqMap[lChar];
            start++
        }
        maxLen = Math.max(maxLen, end-start+1)
    }
    return maxLen;

};