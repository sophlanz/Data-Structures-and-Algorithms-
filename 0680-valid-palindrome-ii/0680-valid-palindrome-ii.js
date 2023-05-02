/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    const isPalindrome = (p1,p2)=>{
 
        while(p1<p2){
            if(s[p1]!== s[p2])return false;
            p1++
            p2--
        }
         return true;
    }
    let l=0,r=s.length-1;
    while(l<r){
        if(s[l]!== s[r]){
            console.log(isPalindrome(l+1,r))
            console.log(isPalindrome(l,r-1))
            if(isPalindrome(l+1,r) || isPalindrome(l,r-1))return true
            else return false
        }
        l++
        r--
    }
    return true
   
};