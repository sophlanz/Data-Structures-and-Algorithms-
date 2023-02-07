/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
   let l=0;
    let r,p;
    let max=0;
    while(l<arr.length-2) {
        p=l
        while(arr[p+1] > arr[p]) {
            p++
        }
        r=p
        while(arr[r+1]<arr[r]) {
            r++
        }
        
       
            if(arr[l]<arr[p]&& arr[p]>arr[r])  max = Math.max(max, r-l+1);
       
      
        l = Math.max(l+1,r)
    }
    return max;
};