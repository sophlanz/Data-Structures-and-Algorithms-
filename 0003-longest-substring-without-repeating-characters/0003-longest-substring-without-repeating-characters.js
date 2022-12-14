/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
let start=0,
    max=0,
    charIndexMap={};
for(let end=0;end<s.length;end++) {
   let rChar=s[end]
    if(rChar in charIndexMap) {
        start = Math.max(start,charIndexMap[rChar]+1)
    }
    charIndexMap[rChar] = end;
    max=Math.max(max,end-start+1);
}
    return max
};