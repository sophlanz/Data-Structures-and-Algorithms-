/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  let map = {};
    words.sort()
    for(const string of words) {
        map[string] = map[string] +1 || 1;
    }
   let values = Object.keys(map).sort((a, b) => map[b]-map[a] )
    console.log(values)

    return values.slice(0,k);
};
