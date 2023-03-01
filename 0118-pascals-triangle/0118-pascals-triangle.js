/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
     const pt = []
  for(let i = 0; i< numRows; i++) {
    pt[i] = []
    for(let j = 0; j < i+1; j++) {
      if(j === 0 || j === i) {
        pt[i][j] = 1
      } else {
        pt[i][j] = pt[i-1][j-1] + pt[i-1][j]
      }
    } 
  }
  return pt
};