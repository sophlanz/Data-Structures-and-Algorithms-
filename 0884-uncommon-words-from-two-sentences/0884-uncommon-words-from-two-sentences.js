/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let freqMap={};
  let res=[]

   for(const char of s1.split(" ")) {
       freqMap[char] ? freqMap[char]++ : freqMap[char] =1;
       
   }
    for(const char of s2.split(' ')) {
        freqMap[char] ? freqMap[char]++ : freqMap[char]=1;
    }
    for (const char in freqMap) {
        if(freqMap[char] ===1) res.push(char);
    }
    console.log(freqMap)
    return res;
};