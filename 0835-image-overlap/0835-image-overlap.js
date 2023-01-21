/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    const rows = img1.length;
    const cols = img1[0].length;
    let vals1=[];
    let vals2=[]
    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
            if(img1[i][j] === 1) {
                vals1.push([i,j])
            }
            if(img2[i][j]===1) {
                vals2.push([i,j])
            }
        }
    }
    let map ={};
    let max=0;
    for(const [i1,j1] of vals1) {
        for(const [i2,j2] of vals2) {
            let diff = [i2-i1,j2-j1];
            map[diff] ? map[diff]++ : map[diff] =1;
            max = Math.max(max, map[diff]);
        }
    }
    return max;
};