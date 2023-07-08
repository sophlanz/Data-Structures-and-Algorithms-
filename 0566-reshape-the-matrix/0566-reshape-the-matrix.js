/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let all = mat.flat();
    let rows=mat.length;
    let cols = mat[0].length;
 if(rows * cols !== r* c) return mat
    let res=Array.from({length:r},()=> Array.from({length:c}))
    for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
            let val = all.shift();
            res[i][j] = val
        }
    }
 return all.length ? mat : res
};