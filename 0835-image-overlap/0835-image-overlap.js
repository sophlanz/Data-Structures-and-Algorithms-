/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    const rows=img1.length;
    const cols=img1[0].length
    let v1=[];
    let v2=[];
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(img1[i][j] !==0) v1.push([i,j]);
            if(img2[i][j] !==0)v2.push([i,j]);
        }
    }
    let diffMap={};
    let maxOverlap =0;
    for(const [i1,j1] of v1){
        for(const [i2,j2] of v2){
            let diff = [i2-i1,j2-j1];
            diffMap[diff] ? diffMap[diff]++ : diffMap[diff]=1;
            maxOverlap = Math.max(maxOverlap, diffMap[diff]);
        }
    }
    return maxOverlap
};