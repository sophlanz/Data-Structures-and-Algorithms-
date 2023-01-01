/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
let start =0,
    maxLen=0,
    map={};
    for(let end=0;end<s.length;end++) {
        const rChar = s[end];
        if(rChar in map) {
            start = Math.max(start, map[rChar]+1)
        }
        map[rChar] = end
        maxLen = Math.max(maxLen, end-start+1);
    }
    return maxLen;
};

