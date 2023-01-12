/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count=0;
    let maxCount=0;
    for(let i=0;i<s.length;i++) {
        if(s[i]==="(") {
            count++
            maxCount=Math.max(maxCount,count)
        }else if (s[i]===")") {
            count--
        }
    }
    return maxCount
};