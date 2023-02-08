/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack=[];
    let count=0
    for(let i=0;i<s.length;i++) {
        if(s[i]==="("){
            count++
            stack.push(i)
        }else if (s[i]===")") {
            if(count >0) {
                 count--
                 stack.pop();
            }else {
                stack.push(i)
            }
           
           
        }
    }
    let res = s.split('');
    for(const val of stack) {
        res[val]="";
    }
    return res.join('')
    
  
};