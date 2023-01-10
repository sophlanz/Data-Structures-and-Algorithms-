/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
     let stack = [];
    for(let i=0;i<s.length;i++) {
        const char = s[i]
        if(stack.length !== 0 && stack[stack.length-1][0]===char) {
            stack[stack.length-1][1]++
            if(stack[stack.length-1][1]===k){
                stack.pop();
            }
        }else {
            stack.push([char,1])
        }
    };
    let result = '';
    for (const [char,count] of stack) {
        result += char.repeat(count)
    }
    return result
};