/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let freqStack = [];
    for(let i=0;i<s.length;i++) {
        const char = s[i];
        if(freqStack.length !== 0 && freqStack[freqStack.length-1][0] == char) {
            freqStack[freqStack.length-1][1]++;
            if(freqStack[freqStack.length-1][1] === k) freqStack.pop();
        }else {
            freqStack.push([char,1]);
        }
    }
    let res=''
    for(const [char,count] of freqStack) {
        res+= char.repeat(count);
    }
    return res;
};