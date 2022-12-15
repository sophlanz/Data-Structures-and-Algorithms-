/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let start=0,
       maxLen=0,
       map={};
    for(let end=0; end<s.length;end++) {
   let rChar=s[end];
        
            while(rChar in map) {
                let lChar = s[start];
                delete map[lChar]
                start++
            }
        
        map[rChar] = 1;
        maxLen=Math.max(maxLen,end-start+1)
    }
    return maxLen
};