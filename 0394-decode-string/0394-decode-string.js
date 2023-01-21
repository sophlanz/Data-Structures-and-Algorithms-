/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack=[],
        num=0,
        str="";
    for(let i=0;i<s.length;i++) {
        if(s[i] === "[") {
            stack.push(num);
            stack.push(str);
            str=""
            num=0
        }else if (s[i]==="]"){
            let prevStr = stack.pop();
            let num = stack.pop();
            str = prevStr + str.repeat(num);
        }else if (!isNaN(s[i])) {
            num = num*10 + Number(s[i]);
        }else {
            str += s[i];
        }
    }
    return str;
};