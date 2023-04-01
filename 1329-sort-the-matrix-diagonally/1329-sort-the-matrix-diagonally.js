/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    const rows = mat.length;
    const cols = mat[0].length;
    let vectorMap = {};
    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
            const vector = j-i;
            vectorMap[vector] ? vectorMap[vector].push(mat[i][j]) : vectorMap[vector] = [mat[i][j]]
        }
    }
  
    for(const val in vectorMap) {
       vectorMap[val].sort((a,b)=> a-b)
    }
    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
            const vector = j-i;
            mat[i][j] = vectorMap[vector].shift();
        }
    }
    return mat
};