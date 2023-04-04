/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
   let str='';
    let num=0;
    let stack=[];
    for(let i=0;i<s.length;i++){
        let char = s[i];
        if(char=="[") {
            stack.push(num);
            stack.push(str);
            num=0;
            str='';
        }else if(char == ']'){
            let prevStr = stack.pop();
            let prevNum = stack.pop();
            str = prevStr + str.repeat(prevNum);
        }else if(!isNaN(char)){
            num = num*10 + parseInt(char);
        }else{
            str += char
        }
    }
    return str
    
}
           
        
     