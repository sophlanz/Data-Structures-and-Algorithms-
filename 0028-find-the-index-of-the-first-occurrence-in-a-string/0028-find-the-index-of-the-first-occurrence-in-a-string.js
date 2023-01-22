/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack.length < needle.length) return -1;
       if(!needle.length || haystack===needle) return 0
    let start=0;
    for(let end=needle.length;end<=haystack.length;end++) {
        let word = haystack.slice(start,end);
        if(word === needle) {
            return start
        }
        start++
    }
    return -1
};