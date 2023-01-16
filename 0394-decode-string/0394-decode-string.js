/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack=[],
        num=0,
        str='';
    for(let i=0;i<s.length;i++) {
        if(s[i] === '[') {
            stack.push(str);
            stack.push(num);
            str='';
            num=0
        }else if (s[i]===']') {
            let currNum = stack.pop();
            let prevStr = stack.pop();
            str = prevStr + str.repeat(currNum);
        }else if (!isNaN(s[i])) {
            num = num*10 + Number(s[i]);
        }else {
            str+= s[i];
        }
    }
    return str;
};
