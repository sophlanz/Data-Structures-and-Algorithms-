/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    let set = new Set([1,2,3,4,5,6,7,8,9]);
    for(let i=2;i<=n;i++) {
        let newSet = new Set();
        for(const prevVal of set) {
            let lastDigit = prevVal%10;
            let plusK = lastDigit + k;
            let minusK = lastDigit -k
            if(plusK <10) newSet.add(prevVal*10 + plusK);
            if(minusK>=0) newSet.add(prevVal*10 + minusK)
        }
    set=newSet;
    }
    return [...set]
};