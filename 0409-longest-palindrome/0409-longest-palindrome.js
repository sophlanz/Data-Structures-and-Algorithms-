/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let freqMap={};
    let count=0;
    for(const char of s) {
        char in freqMap ? freqMap[char]++ : freqMap[char]=1;
        if(freqMap[char]===2){
            count += 2;
            delete freqMap[char];
        }
    }
 
    return count < s.length ? count+1 : count ;
    
};