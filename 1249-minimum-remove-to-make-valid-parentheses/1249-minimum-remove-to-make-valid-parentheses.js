/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
   let stack=[];
    let count=0;
    for(let i=0;i<s.length;i++) {
        if(s[i]==="("){
            stack.push(i);
            count++
        }else if(s[i]===")") {
            if(count>0){
                stack.pop();
                count--
            }else {
                stack.push(i);
            }
        }
    }
    let result = s.split('');
    for(const idx of stack) {
        result[idx] = ""
    }
    return result.join('')
    
};