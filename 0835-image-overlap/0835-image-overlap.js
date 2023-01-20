/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
         const rows = img1.length;
        const cols = img1[0].length;
        let s1=[];
        let s2=[];
        for(let i=0;i<rows;i++){
            for(let j=0;j<cols;j++){
                if(img1[i][j]==1){
                   s1.push([i,j]);
                }
                if(img2[i][j]==1){
                    s2.push([i,j]);
                }
            }
        }
        let ans=0;
        let map = {};

       for(const v1 of s1) {
           for(const v2 of s2) {
               let shift = ([v2[0] - v1[0] , v2[1]-v1[1]]);
               map[shift] ? map[shift]++ : map[shift] = 1;
               ans = Math.max(ans,map[shift])
           }
       }
        return ans;
    
};
 