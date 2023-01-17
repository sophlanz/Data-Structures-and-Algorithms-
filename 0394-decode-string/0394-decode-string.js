/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
let stack =[];
    let num = 0;
    let str = '';
    for(let i=0;i<s.length;i++) {
        if(s[i] === '[') {
            stack.push(num);
            stack.push(str);
            num=0;
            str=''
        }else if (s[i] === "]") {
            let prevString = stack.pop();
            let currNum = stack.pop();
            str = prevString + str.repeat(currNum);
        }else if (!isNaN(s[i])) {
            num = num*10 + Number(s[i]);
        }else {
            str += s[i]
        }
    }
    return str;
    
    
    
};