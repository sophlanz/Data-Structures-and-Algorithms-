/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
 let stack = [];
    for(let i=0;i<s.length;i++) {
        let char = s[i]
        if(stack.length !== 0 && stack[stack.length-1][0]===char){
            stack[stack.length-1][1]++
            if(stack[stack.length-1][1]===k)stack.pop();
        }else {
            stack.push([char,1]);
        }
    }
    let res='';
    for(const [char,count]of stack) {
        res += char.repeat(count);
    }
    return res;
};