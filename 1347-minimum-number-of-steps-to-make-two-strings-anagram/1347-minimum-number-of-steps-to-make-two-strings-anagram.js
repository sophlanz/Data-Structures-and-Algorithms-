/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let map = {};
    for( let i=0;i<s.length;i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
        map[t[i]] ? map[t[i]]-- : map[t[i]] = -1;
    };
    let count=0
    for (const char in map) {
        if(map[char] > 0) count += map[char]
    }
    return count
};