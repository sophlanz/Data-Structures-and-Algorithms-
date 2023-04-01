/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = [];
    let count=0
 for(let i=0;i<s.length;i++) {
     if(s[i]==="(") {
         stack.push(i);
         count++
     }else if(s[i]===")") {
         if(count>0) {
             stack.pop();
             count--
         }else{
             stack.push(i);
         }
     }
 }
    let res = s.split('');
    for(const val of stack) {
        res[val] = ""
    }
    return res.join('');
};