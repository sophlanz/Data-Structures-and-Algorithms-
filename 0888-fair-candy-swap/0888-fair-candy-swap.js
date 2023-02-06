/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {

const sumA = A.reduce((sum,candy)=> sum+candy);
const sumB =B.reduce((sum,candy)=> sum+candy);
    const half = ((sumA + sumB)/2)
    const diff = sumA - half;
    let setA = new Set(A);
    for(const candy of B) {
        if(setA.has(diff+candy)) return [diff+candy,candy]
    }
};
    