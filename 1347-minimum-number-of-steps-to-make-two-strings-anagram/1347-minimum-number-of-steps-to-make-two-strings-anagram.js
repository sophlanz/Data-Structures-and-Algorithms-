/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
let charFreqMap = {};
    for(let i=0;i<s.length;i++) {
        charFreqMap[s[i]] ? charFreqMap[s[i]]++ : charFreqMap[s[i]] = 1;
        charFreqMap[t[i]] ? charFreqMap[t[i]]-- : charFreqMap[t[i]]= -1;
    }
    let minSteps = 0;
    for(let char in charFreqMap) {
        if(charFreqMap[char] >0) minSteps += charFreqMap[char];
    };
    return minSteps
    
    
    
    
};