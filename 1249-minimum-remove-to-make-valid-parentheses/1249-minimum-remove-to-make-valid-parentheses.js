/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
   let result = s.split('');
    let balance=0;
    let idxStack=[];
    for(let i=0;i<s.length;i++) {
        if(s[i]==='(') {
            idxStack.push(i);
            balance++
        }else if (s[i]===")") {
            if(balance <1) idxStack.push(i)
            else {
                idxStack.pop();
                balance--
            }
        }
    }
    for(let index of idxStack) {
        result[index] = "";
    }
    return result.join('');
};