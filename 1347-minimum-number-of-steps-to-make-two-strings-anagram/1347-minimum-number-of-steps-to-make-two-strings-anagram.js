/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
 let freqMap={};
    for(let i=0;i<s.length;i++) {
        freqMap[s[i]] ? freqMap[s[i]]++ : freqMap[s[i]]=1;
        freqMap[t[i]] ? freqMap[t[i]]-- : freqMap[t[i]]=-1;
    }
    let steps=0
    for(const val in freqMap) {
        if(freqMap[val]>0) {
            steps += freqMap[val]
        }
    }
    return steps
};