/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
  let l=0,m,r, maxLen=0;
    while(l<arr.length-2) {
        m=l
        while(arr[m] < arr[m+1] ) {
            m++
        }
        r=m
        while(arr[r]>arr[r+1]) {
            r++
        }
    
            if(arr[l]<arr[m] && arr[m]>arr[r]) maxLen = Math.max(r-l+1,maxLen);
   
       
        
        l = Math.max(l,l+1);
    }
    return maxLen
};