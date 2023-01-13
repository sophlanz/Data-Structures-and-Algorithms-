/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

 let arr = Array.from(String(x));
    let l=0;
    let r=arr.length-1
 
    while(l<=r) {
        console.log(arr[l])
       if(arr[l]=== arr[r]) {
           l++
           r--
       } else {
           return false
       }
    }
    return true;
    };