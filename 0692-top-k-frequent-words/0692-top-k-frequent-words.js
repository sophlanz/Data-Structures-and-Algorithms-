/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let freqMap = {};
    for(let i=0;i<words.length;i++) {
        if(!freqMap[words[i]]) freqMap[words[i]] = 1;
        else {
            freqMap[words[i]]++
        }
    };
    console.log(freqMap)
    let topWords= Object.keys(freqMap).sort((a,b)=> {
      let n=  freqMap[b]-freqMap[a]
      if(n!==0) return n
        return a > b ? 1:-1;
    });
    console.log(topWords)
    return topWords.splice(0,k); 
};