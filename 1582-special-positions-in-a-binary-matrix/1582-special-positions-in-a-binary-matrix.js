/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
  let rows = mat.length;
    let cols=mat[0].length;
    let count=0
    const checkCol = (row,col) => {
        const tmp = mat[row][col]
        mat[row][col] = 0;
        for(let i=0;i<rows;i++) {
            console.log(mat[i][col])
            if(mat[i][col]===1) {
                mat[row][col] = tmp;
                return false
            }
        }
        mat[row][col] = tmp;
        return true;
    };
       const checkRow = (row,col) => {
        const tmp = mat[row][col]
        mat[row][col] = 0;
        for(let i=0;i<cols;i++) {
            console.log(mat[row][i])
            if(mat[row][i]===1) {
                mat[row][col] = tmp;
                return false
            }
        }
        mat[row][col] = tmp;
        return true;
    };
   
    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
         
            if(mat[i][j] === 1) {
               
                if(checkRow(i,j) && checkCol(i,j)) {
                    count++
                }
            }
        }
    }
    return count;
};