/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
 let stack=[];
 let map={
     ')' :'(',
     '}':'{',
     ']':'[' 
 }
 for(const char of s){
     if(stack.length !==0){
         //if its closing
         if(map[char]){
             let prevChar = stack.pop();
             if(map[char]!==prevChar) return false;
         }else{
             //if its opening 
             stack.push(char)
         }
     } else{
         stack.push(char) 
     }
    
 }
    return stack.length ===0
};