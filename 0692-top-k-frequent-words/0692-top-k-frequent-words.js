/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    words.sort();
    let freqMap={};
    for(const word of words) {
        if(!freqMap[word]) freqMap[word] =1;
        else {
            freqMap[word]++
        }
    }
    let arr = Object.keys(freqMap).sort((a,b)=> freqMap[b]-freqMap[a]);
    return arr.splice(0,k);
};