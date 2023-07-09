/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let freqMap={};
    let length = Math.max(s.length, t.length);
    for(let i=0;i<length;i++){
        let sChar = s[i];
        sChar in freqMap ? freqMap[sChar]++ : freqMap[sChar] = 1;
        let tChar=t[i];
        tChar in freqMap ? freqMap[tChar]-- : freqMap[tChar]=-1;
    }
    for(const char in freqMap){
        if(freqMap[char]!== 0) return false
    }
    return true;
};