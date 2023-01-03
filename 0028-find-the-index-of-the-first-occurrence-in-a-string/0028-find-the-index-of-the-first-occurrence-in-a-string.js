/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

if(needle.length > haystack.length) return -1;
    if(needle === haystack || needle.length <=0) return 0
    let start =0;
    for(let end=needle.length;end<=haystack.length;end++) {
        const window = haystack.slice(start,end)
        if(window === needle) {
            return start
        }
        start++
    }
    return -1
};