/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  let map = {};
    for(const string of words) {
        map[string] = map[string] +1 || 1;
    }
   let values = Object.keys(map)
        .sort((a, b) => {
            let n = map[b] - map[a];
            if (n !== 0) {
                return n;
            }

            return a > b ? 1 : -1;
        });

    return values.slice(0,k);
};
