/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let idxStack=[];
    let count=0;
    for(let i=0;i<s.length;i++) {
        if(s[i]=="(") {
            idxStack.push(i);
            count++
        }else if(s[i]==")"){
            if(count>0) {
                idxStack.pop();
                count--
            }else {
                idxStack.push(i);
            }
        }
    }
    let result = s.split('')
    for(const idx of idxStack) {
        result[idx] = ""
    }
    return result.join('')
};