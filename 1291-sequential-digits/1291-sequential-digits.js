/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let digits = '123456789'
    const maxWindow = high.toString().length;
    const minWindow = low.toString().length;
    let res=[]
    for(let window = minWindow;window<=maxWindow;window++) {
        for(let i=0;i+window<=digits.length;i++) {
            let num = parseInt(digits.substring(i,i+window));
            if(num <= high && num >= low) {
                res.push(num);
            }
        }
    }
    return res;
};