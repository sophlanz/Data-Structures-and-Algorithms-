/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
  let rows = mat.length;
    let cols=mat[0].length;
    let count=0
  
       const checkRow = (row,col) => {
        let countOnes = 0;
        for(let i=0;i<cols;i++) {
            if(mat[row][i]===1) {
                countOnes++
            }
        }
            for(let i=0;i<rows;i++) {
            if(mat[i][col]===1) {
                countOnes++
            }
        }
       return countOnes === 2.
    };
   
    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
         
            if(mat[i][j] === 1 && checkRow(i,j)) {
               count++
                
            }
        }
    }
    return count;
};