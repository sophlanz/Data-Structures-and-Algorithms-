/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let map = {
        ')' :'(',
        ']':'[',
        '}':'{'
    };
    let stack=[];
    for(let i=0;i<s.length;i++){
        const char = s[i];
        if(!(char in map)){
            stack.push(char)
        }else{
            const prevChar = stack.pop();
            if(map[char] !== prevChar)return false
        }
    }
    return stack.length ===0
};