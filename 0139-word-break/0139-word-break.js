/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {     
  let table= [];
    table[0] = true;
    for(let i=0;i<=s.length;i++) {
        if(table[i]===true){
            for(const word of wordDict) {
                if(s.slice(i, i+word.length)=== word) {
                    table[i+word.length] = true;
                }
            }
        }
    }
    return table[s.length] ? table[s.length]:false
};