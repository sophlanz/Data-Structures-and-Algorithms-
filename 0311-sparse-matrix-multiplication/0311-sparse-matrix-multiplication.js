/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @return {number[][]}
 */
var multiply = function(mat1, mat2) {
    if(mat1.length === 0 ||
      mat2.length === 0 ||
      mat1[0].length !== mat2.length) return [];
    const rows = mat1.length;
    const cols = mat1[0].length;
    const colsB = mat2[0].length;
    let res = new Array(rows).fill(0).map(()=> new Array(colsB).fill(0));
    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
            if(mat1[i][j] === 0) continue;
            for(let k =0;k<colsB;k++) {
                res[i][k] += mat1[i][j] * mat2[j][k];
            }
        }
    }
    return res;
};