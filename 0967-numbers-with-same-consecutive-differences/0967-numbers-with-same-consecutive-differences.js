/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    let dp = new Set([1,2,3,4,5,6,7,8,9]);
    for(let i=2;i<=n;i++) {
        let newDp =new Set();
        for(const val of dp) {
            let lastDigit = val %10;
            let plusK = lastDigit + k;
            let minusK = lastDigit -k
            if(plusK <10) newDp.add((val*10)+plusK);
            if(minusK>=0)newDp.add((val*10)+minusK);
        }
        dp = newDp;
    }
    return [...dp];
};