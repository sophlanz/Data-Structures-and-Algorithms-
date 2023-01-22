/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    const n = arr.length;
    
    if (n < 3) return 0;
    
    let maxLen = 0;
    let start = 0;
    
    while (start < n - 2) {
       let end = start;
        
        // check for ascending
        while (end < n - 1 && arr[end] < arr[end + 1]) {
            end++;
        }
        
        const peak = arr[end]; // mark the apex 
        
        // check for descending
        while (end < n - 1 && arr[end] > arr[end + 1]) {
            end++;
        }
        
        if (arr[start] < peak && peak > arr[end]) {
            maxLen = Math.max(maxLen, end - start + 1);
        }
        
        start = Math.max(end, start + 1); // if we made no advancement with end, then we would want to at least move one space
    }
   
    return maxLen;
    
};