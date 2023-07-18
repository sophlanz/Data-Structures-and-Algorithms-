/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<=1)return x
 let l=1, r=Math.floor(x/2);
    while(l<r){
        let mid1 = Math.floor((l+r)/2);
        let mid2 = mid1 + 1;
        if(mid1*mid1<= x && mid2*mid2>x){
            return mid1
        }else if(mid1 * mid1 > x){
            r=mid1-1
        }else{
            l=mid1+1
        }
    }
    return l
};   
   