/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
      const sumA = A.reduce((acc, cur) => acc + cur);
  const sumB = B.reduce((acc, cur) => acc + cur);
  const diff = (sumA - sumB) >> 1;
  const setA = new Set(A);
  for (const candy of B) {
    if (setA.has(candy + diff)) return [candy + diff, candy];
  }
    
    
    
    
};