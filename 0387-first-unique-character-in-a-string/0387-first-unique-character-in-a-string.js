/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
let map = {};
    for(const char of s) {
        map[char] = map[char]+1 ||1
    }
    for(let i=0;i<s.length;i++) {
        const char = s[i];
        if(map[char]===1) {
            return i
        }
    }
    return -1
};