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
    if(!stack.length){
        stack.push(char);
    }else{
        if(char in map){
            let firstChar = stack.pop();
           if( firstChar !== map[char] )return false;
        }else{
            stack.push(char)
        }
    }
}
    return stack.length ===0
};