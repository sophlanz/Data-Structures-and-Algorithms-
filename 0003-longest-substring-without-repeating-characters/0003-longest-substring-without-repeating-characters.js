/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
let start =0,
    idxMap={},
    max=0;
    for(let end=0;end<s.length;end++) {
        let rChar = s[end];
        if(rChar in idxMap) {
            start = Math.max(start,idxMap[rChar]+1)
         }
        idxMap[rChar]=end
        max=Math.max(max,end-start+1)
    }
    return max;
};