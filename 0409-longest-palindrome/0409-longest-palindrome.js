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
    for(const char in freqMap){
        if(freqMap[char]===1) {
            count++
            break;
        }
    }
    return count===0 ? 1 : count ;
    
};