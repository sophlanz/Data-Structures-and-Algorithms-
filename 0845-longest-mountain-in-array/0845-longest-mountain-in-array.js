/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
let l=0,r,m,maxLen=0;
    while(l<arr.length-2) {
        m=l
        while(arr[m]<arr[m+1]) {
            m++
        }
        r=m
        while(arr[r]>arr[r+1]) {
            r++
        }
        if(arr[l]<arr[m] && arr[m]>arr[r]) maxLen=Math.max(maxLen, r-l+1);
        l= Math.max(l+1, l);
    }
    return maxLen
};