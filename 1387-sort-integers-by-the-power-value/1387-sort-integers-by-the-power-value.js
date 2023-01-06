/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    let res =[];
    let memo = new Map();
    memo.set(1,0);
    const getSteps = (num) => {
        if(memo.has(num)) return memo.get(num);
        const steps = num % 2 ? getSteps(num*3+1) +1 : getSteps(num/2) +1;
        memo.set(num, steps)
        return memo.get(num);
    }
    while(lo<=hi) {
        res.push([lo,getSteps(lo)])
        lo++
    }
    res.sort((a,b)=> a[1]-b[1]);
    return res[k-1][0];
};