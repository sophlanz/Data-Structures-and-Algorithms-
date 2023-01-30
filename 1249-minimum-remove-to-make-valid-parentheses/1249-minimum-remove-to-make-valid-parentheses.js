/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  let idxStack = [],
      balance=0;
    for(let i=0;i<s.length;i++) {
        if(s[i] === "(") {
            idxStack.push(i);
            balance++
        }else if (s[i]=== ")") {
            if(balance > 0) {
                idxStack.pop();
                balance--
            }else {
                idxStack.push(i)
            }
        }
    }
    let result = s.split('')
    for(const idx of idxStack) {
        result[idx] = "";
    }
    return result.join('');
};