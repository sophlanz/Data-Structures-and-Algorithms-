/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    let freqCount = {};
    for(let i=0;i<s.length;i++){
        const sChar = s[i];
        const tChar = t[i];
      sChar in freqCount ? freqCount[sChar]++ : freqCount[sChar]=1;
      tChar in freqCount ? freqCount[tChar]-- : freqCount[tChar]=-1;
    }
    for(const val in freqCount) {
        if(freqCount[val] !== 0){
            return false;
        }
    }
    return true
};