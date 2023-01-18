/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count=0,
        maxDepth = 0;
    
   for(let i=0;i<s.length;i++) {
       const char = s[i];
       if(char === '(') {
           count++
       }else if (char === ")") {
           count--;
       }
       maxDepth = Math.max(maxDepth,count);
   }
    return maxDepth;
};