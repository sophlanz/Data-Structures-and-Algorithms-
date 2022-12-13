/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let start=0,
      maxLen=0,
      charFreq={};
    for(let end=0; end<s.length;end++) {
        //get right char
        const rChar = s[end];
         //if Char  of end is already in the charFreq keep shrinking the window
        while(charFreq[rChar])
        {
            const lChar = s[start]
            //shrink the window, deleting the starting char
            delete charFreq[lChar]
            //move the start
            start++
        }
        //now we've removed it, add the new one
        charFreq[rChar] = 1
        //update maxLen
        maxLen = Math.max(maxLen, end-start+1);   
    
    }
    return maxLen
};