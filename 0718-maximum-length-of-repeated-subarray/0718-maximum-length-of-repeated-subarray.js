/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {  
let max=0;
    let dp = new Array(nums1.length+1).fill(0);
    for(let i=1;i<=nums1.length;i++){
        let newDp = new Array(nums1.length+1).fill(0);
        for(let j=1;j<=nums2.length;j++) {
            if(nums1[i-1] === nums2[j-1]) {
                newDp[j] = dp[j-1] + 1;
                max = Math.max(max,newDp[j]);
            }else newDp[j]=0;
        }
        dp = newDp
    }
    return max;
};