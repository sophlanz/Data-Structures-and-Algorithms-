/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    words.sort();
    let freqMap = {};
    for(let i=0;i<words.length;i++) {
        if(!freqMap[words[i]]) freqMap[words[i]] = 1;
        else {
            freqMap[words[i]]++
        }
    };
    console.log(freqMap)
    let topWords= Object.keys(freqMap).sort((a,b)=> freqMap[b]-freqMap[a]);
    console.log(topWords)
    return topWords.splice(0,k); 
};