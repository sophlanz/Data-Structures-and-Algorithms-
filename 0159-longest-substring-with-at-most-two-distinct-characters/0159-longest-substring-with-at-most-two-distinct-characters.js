/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let start = 0,
        freqMap={},
        maxLen=0;
    for(let end=0;end<s.length;end++) {
        const char = s[end];
        freqMap[char] ? freqMap[char]++ : freqMap[char] =1;
        while(Object.keys(freqMap).length >2) {
            let lchar = s[start];
            freqMap[lchar]--;
            if(freqMap[lchar] === 0) delete freqMap[lchar];
            start++
        }
        maxLen= Math.max(maxLen,end-start+1 )
    }
    return maxLen
};