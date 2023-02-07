/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
let l=0,
    r,
    max=0,
    p;
    while(l<arr.length-2) {
        p=l;
        while(arr[p+1]>arr[p]) {
            p++
        }
        r=p
        while(arr[r+1]<arr[r]) {
            r++
        }
        if(arr[l]<arr[p] && arr[p]> arr[r]) max=Math.max(max,r-l+1);
        l=Math.max(r,l+1);
    }
    return max;
    
};