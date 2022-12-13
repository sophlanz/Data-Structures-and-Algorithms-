var longestSubstring = function(s, k) {
    let start=0,
        maxLen=0,
        charFreq={};
    for(let end=0; end<s.length;end++) {
        //get right character, add it to the hash map, if it already exists increase value
        const rChar = s[end];
        charFreq[rChar] = charFreq[rChar] +1 || 1;
        //if length of charFreq is longer than k we have too many characters
        while(Object.keys(charFreq).length > k) {
        //shrink the window, decrement the starting character values
            const lChar = s[start];
            charFreq[lChar]--
        //if the start char values reach 0 delete it
        charFreq[lChar] === 0 ? delete charFreq[lChar] : null;
        //move the start pointer
            start ++
 
        }
        //get the maxLen before looping back through s
        maxLen = Math.max(maxLen,end-start+1)
    
    }
    //return maxLen
    return maxLen
};
const s="araaci"
const k=2
console.log(longestSubstring(s,k))