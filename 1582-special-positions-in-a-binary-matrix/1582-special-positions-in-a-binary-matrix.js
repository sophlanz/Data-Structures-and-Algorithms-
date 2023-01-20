/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const rows = mat.length;
    const cols = mat[0].length;
    let count = 0;
    const checkRowsCols = (i,j) => {
        let onesCount = 0;
        //traverse the row
        for(let i=0;i<rows;i++) {
            if(mat[i][j] === 1) {
                onesCount++
            } 
        }
        //traverse col
        for(let j=0;j<cols;j++) {
            if(mat[i][j]=== 1) {
                onesCount++
            }
        }
        return onesCount === 2;
    }
    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
            if(mat[i][j] === 1 && checkRowsCols(i,j)) {
                count++
            }
        }
    }
    return count
};