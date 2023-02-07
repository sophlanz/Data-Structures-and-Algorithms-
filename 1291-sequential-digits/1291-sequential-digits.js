/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let digits = '123456789';
    let min = low.toString().length;
    let max = high.toString().length;
    let res=[];
    for(let window=min;window<=max;window++) {
        for(let i=0;i+window<=digits.length ;i++) {
            let num = parseInt(digits.slice(i,i+window))
            if(num <= high && num >= low)res.push(num)
        }
    }
    return res
};