/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
 const numBits = (num) => {
     const bits = num.toString(2).match(/1/g);
     return bits? bits.length: 0;
 }
 return arr.sort((a,b)=> numBits(a)-numBits(b) || a-b);
};
