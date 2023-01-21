/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    s=s.split('');
    let balance=0,
        idxStack=[];
    for(let i=0;i<s.length;i++){
        if(s[i] === "(") {
            idxStack.push(i);
            balance++
        }else if(s[i] === ")") {
            if(balance >=1) {
                idxStack.pop();
                balance--
            }else {
                idxStack.push(i);
            }
        }
    }
    
    for(const idx of idxStack) {
        s[idx] = "";
    }
        return s.join('');
};