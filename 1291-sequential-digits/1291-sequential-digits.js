/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let digits ="123456789";
    let minWindow = low.toString().length;
    let maxWindow = high.toString().length;
    let res=[]
    for(let window=minWindow;window<=maxWindow;window++) {
        for(let i=0;window+i<=digits.length;i++) {
            let num = parseInt(digits.slice(i,window+i));
            if(num <= high && num>= low)res.push(num);
        }
    }
    return res;
};