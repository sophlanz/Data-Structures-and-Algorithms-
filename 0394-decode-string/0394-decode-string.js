/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
   let stack = [];
    let string="";
    let num=0;
    for(let i=0;i<s.length;i++) {
        if(s[i]==="[") {
            stack.push(string);
            stack.push(num);
            string="";
            num=""
        }else if (s[i]===']'){
            let prevNum = stack.pop();
            let prevString = stack.pop();
            string= prevString + string.repeat(prevNum);
        }else if (!isNaN(s[i])) {
            num = num*10 + Number(s[i]);
        }else {
            string += s[i];
        }
    }
    return string;
};