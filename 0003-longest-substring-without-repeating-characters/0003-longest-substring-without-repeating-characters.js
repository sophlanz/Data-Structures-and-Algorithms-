/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let start =0,
       idxMap={},
       maxLen=0;
    for(let end=0;end<s.length;end++) {
        const rChar = s[end];
        if(rChar in idxMap) {
            start = Math.max(start, idxMap[rChar]+1);
        } 
        idxMap[rChar] = end;
        maxLen = Math.max(maxLen, end-start+1);
    }
    return maxLen
 
};