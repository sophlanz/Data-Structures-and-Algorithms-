/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
 const cache = new Map();
    cache.set(1, 0);
    const getPower = num => {
        if(cache.has(num)) return cache.get(num);
        const power =  num % 2 ? getPower(num * 3 + 1)+1  : getPower(num / 2)+1 ;
        cache.set(num, power);
        return cache.get(num);
    }
    const res = [];
    while(lo <= hi) {
        res.push([lo, getPower(lo)]);
        lo++;
    }
     res.sort((a, b) => a[1] - b[1])
     return res[k - 1][0];
};
    
