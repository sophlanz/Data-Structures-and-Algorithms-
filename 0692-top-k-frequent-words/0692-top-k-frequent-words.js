/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    words.sort();
    let freqMap={};
    for(let i=0;i<words.length;i++) {
        const word = words[i];
        freqMap[word] ? freqMap[word]++ : freqMap[word] =1;
    };
    const values = Object.keys(freqMap).sort((a,b)=> freqMap[b]-freqMap[a]);
    return values.splice(0,k)
}