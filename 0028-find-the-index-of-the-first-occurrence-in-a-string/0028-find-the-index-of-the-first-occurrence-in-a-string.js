/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
   if(needle.length >haystack.length) return -1;
    if(needle === haystack || !needle) return 0;
    let start=0
    for(let end=needle.length;end<=haystack.length;end++) {
        let string = haystack.slice(start,end);
        if(string===needle) return start
        start++
    }
    return -1;
};