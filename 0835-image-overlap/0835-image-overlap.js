/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    const rows = img1.length;
    const cols = img1[0].length;
    let vals1=[];
    let vals2=[];
    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
            if(img1[i][j] === 1) {
                vals1.push([i,j])
            }
            if(img2[i][j] === 1) {
                vals2.push([i,j]);
            }
        }
    }
    let map ={};
    let max=0
    for(const v1 of vals1) {
        for(const v2 of vals2) {
            let diff = [v2[0]-v1[0], v2[1]-v1[1]]
            map[diff] ? map[diff]++ : map[diff]=1;
            max = Math.max(max, map[diff]);
        }
    }
    return max;
};