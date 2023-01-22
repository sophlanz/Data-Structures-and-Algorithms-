/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  let res=  s.split('');
    let balance=0;
    let stack = [];
    for(let i=0;i<s.length;i++) {
        if(s[i] === '(') {
            stack.push(i);
            balance++
        }else if(s[i]===")") {
            if(balance>=1){
                stack.pop();
                balance--
            }else {
                stack.push(i);
            }
            
        }
    }
    for(const idx of stack) {
        res[idx] = "";
    }
    return res.join('')
};