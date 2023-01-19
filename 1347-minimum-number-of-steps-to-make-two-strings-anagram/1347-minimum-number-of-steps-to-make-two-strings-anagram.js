/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let freqMap={};
    for(let i=0;i<s.length;i++) {
        freqMap[s[i]] ? freqMap[s[i]]++ : freqMap[s[i]] = 1;
        freqMap[t[i]] ? freqMap[t[i]]-- : freqMap[t[i]] = -1;
    }
    let count=0
    for(const char in freqMap) {
        if(freqMap[char] > 0) {
            count += freqMap[char]
        }
    }
    return count;
};