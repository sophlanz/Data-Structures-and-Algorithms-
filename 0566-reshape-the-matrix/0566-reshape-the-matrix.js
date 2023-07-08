/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let all = [];
    let rows=mat.length;
    let cols = mat[0].length;
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            all.push(mat[i][j]);
        }
    }
    let res=Array.from({length:r},()=> Array.from({length:c}))
    for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
             if(!all.length) return mat;
            let val = all.shift();
            res[i][j] = val
        }
    }
 return all.length ? mat : res
};