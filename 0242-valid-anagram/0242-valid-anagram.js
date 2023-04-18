/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let freqMap={};
    let length1=s.length;
    let length2=t.length
    let length = Math.max(length1,length2)
    for(let i=0;i<length;i++){
        freqMap[s[i]]? freqMap[s[i]]++ : freqMap[s[i]]=1;
        freqMap[t[i]]? freqMap[t[i]]-- : freqMap[t[i]]=-1;
    }
  for(const char in freqMap){
      if(freqMap[char]>0 || freqMap[char]<0) return false
  }
    return true;
};