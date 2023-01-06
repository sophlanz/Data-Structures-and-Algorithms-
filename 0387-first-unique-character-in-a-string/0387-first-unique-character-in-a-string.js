/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let charMap = {};
    for (const char of s) {
        charMap[char] = charMap[char] +1 || 1;
}
    for(let i=0;i<s.length;i++) {
        const char = s[i];
        if(charMap[char]===1) {
            return i
        }
    }
    return -1
};