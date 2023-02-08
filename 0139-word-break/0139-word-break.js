/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let valid = new Array(s.length+1).fill(false);
    valid[0]=true;
    for(let i=0;i<s.length;i++) {
        if(valid[i]==true) {
            for(const word of wordDict) {
                let length = word.length
                let possibleString = s.slice(i,i+length);
                if(possibleString === word) valid[i+length]=true;
                    
            }
        } 
    }
    return valid[s.length]
};