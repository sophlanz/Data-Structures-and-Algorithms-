/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let str="",
        stack=[];
    let num=0;
    for(let i=0;i<s.length;i++) {
        let char = s[i]
      
        if(char==="["){
            console.log(num)
            stack.push(num);
            stack.push(str);
           
            num=0;
            str="";
        }else if(char==="]"){
            let prevString = stack.pop();
            let currNum = stack.pop();
           
            str = prevString + str.repeat(currNum);
        
        }else if(!isNaN(char)){
          
            num = num*10 + parseInt(char);
          console.log(num)
        }else {
            str += char
          
        }
    }
    return str;
};