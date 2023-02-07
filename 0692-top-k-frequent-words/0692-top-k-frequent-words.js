/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    words.sort();
    let freqMap = {};
    for(const word of words) {
        freqMap[word] ? freqMap[word]++ : freqMap[word] =1;
    }
   const values= Object.keys(freqMap).sort((a,b)=> freqMap[b]-freqMap[a]);
    return values.slice(0,k);
    
};