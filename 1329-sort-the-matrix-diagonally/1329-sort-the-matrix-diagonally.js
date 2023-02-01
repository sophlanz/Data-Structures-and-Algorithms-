/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
   
 let map = {};
    const rows = mat.length;
    const cols = mat[0].length;
    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
            let vector = i-j;
            if(!map[vector]) map[vector]=[mat[i][j]]
            else map[vector].push(mat[i][j]);
        }
    }
   for(const val in map) {
       map[val].sort((a,b)=> a-b);
   }
    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
            let vector = i-j;
            mat[i][j] = map[vector].shift();
        }
    }
    return mat
};