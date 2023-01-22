/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
  let l=0,
      len = arr.length,
      
      maxLen=0;
    let r;
     let peak;
    while(l<=len-3) {
        r = l;
      
             while(arr[r]<arr[r+1]) {
                r++
            }
            peak=r
      
      
             while(arr[r] > arr[r+1]) {
                 r++
             }
        if(arr[l] < arr[peak] && arr[r] < arr[peak])  maxLen = Math.max(maxLen, r-l+1);
       
         l = Math.max(r, l+1)  
         
            
        
    }
    return maxLen;
    
};