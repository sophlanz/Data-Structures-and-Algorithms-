/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let idxMap = {};
    let maxLen=0;
    let start=0
    for(let end=0;end<s.length;end++) {
        const char = s[end];
        if(char in idxMap) {
            start = Math.max(start, idxMap[char]+1)
        }
        idxMap[char] = end;
    
        maxLen=Math.max(maxLen, end-start+1)
    }
    return maxLen
};