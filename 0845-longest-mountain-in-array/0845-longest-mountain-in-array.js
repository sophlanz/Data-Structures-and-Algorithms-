/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
let l=0,p,r,maxLen=0;
    while(l<arr.length-2) {
        p=l
        while(arr[p]<arr[p+1]) {
           p++
        }
        r=p;
        while(arr[r]>arr[r+1]) {
            r++
        }
        if(arr[l]<arr[p]&& arr[p]> arr[r]) maxLen = Math.max(r-l+1,maxLen);
        l++
    }
    return maxLen
};