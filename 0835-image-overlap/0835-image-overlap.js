/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    let v1=[];
    let v2=[];
    const rows = img1.length;
    const cols = img2.length;
    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
            if(img1[i][j]===1) v1.push([i,j]);
            if(img2[i][j]===1)v2.push([i,j]);
        }
    }
    let diffMap={};
    let maxOverlap=0;
    for(const val1 of v1) {
        for(const val2 of v2) {
            const diff = [val1[0]-val2[0], val1[1]-val2[1]]
            diffMap[diff] ? diffMap[diff]++ : diffMap[diff] =1;
            maxOverlap = Math.max(maxOverlap, diffMap[diff])
        }
    }
    return maxOverlap
};