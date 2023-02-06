/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let diff = [];
    for(let i=0;i<s1.length;i++) {
        if(s1[i] !== s2[i]) diff.push(i)
    }
    if(diff.length >2) return false
    const [a,b] = diff;
    return s1[a] === s2[b] && s1[b] === s2[a];
};