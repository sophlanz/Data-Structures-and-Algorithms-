/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
let result = [];
    let memo = new Map();
    memo.set(1,0);
    const getPower = (num) => {
        if(memo.has(num)) return memo.get(num);
        const steps = num % 2 ? getPower(num*3+1) +1 : getPower(num/2) +1;
        memo.set(num,steps);
        return memo.get(num);
    }
    while(lo<=hi) {
        result.push([lo,getPower(lo)])
        lo++
    }
    result.sort((a,b)=> a[1]-b[1]);
    return result[k-1][0];
};