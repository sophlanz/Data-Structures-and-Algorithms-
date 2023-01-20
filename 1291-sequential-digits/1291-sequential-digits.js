/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const digits = '123456789';
    const minWindow = low.toString().length;
    const maxWindow = high.toString().length;
    let res=[];
    for(let windowSize=minWindow; windowSize<=maxWindow;windowSize++) {
        for(let i=0; i+windowSize <= digits.length;i++) {
            let num = parseInt(digits.substring(i,i+windowSize));
            console.log(num)
            if(num >= low && num<= high) {
                res.push(num);
            }
        }
    }
    return res;
};