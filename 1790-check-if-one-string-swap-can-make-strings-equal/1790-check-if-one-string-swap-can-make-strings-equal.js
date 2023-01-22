/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
   let diffIdx = [];
    for(let i=0;i<s1.length;i++) {
        if(s1[i] !== s2[i]) diffIdx.push(i);
    }
    if(diffIdx.length>2) return false;
    const [a,b] = diffIdx;
    return s1[a] === s2[b] && s1[b] === s2[a];
};