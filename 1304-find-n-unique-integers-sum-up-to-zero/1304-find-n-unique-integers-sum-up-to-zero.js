/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
let res=[];
    let sum=0;
    for(let i=1;i<n;i++){
        res.push(i)
        sum = sum + i;
    }
    res.push(-sum);
    return res
};