/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
 let left = Math.min(...bloomDay), right=Math.max(...bloomDay);
    if(m*k > bloomDay.length) return -1
    while(left<right) {
        let mid = Math.floor((right+left)/2)
        let flowers=0;
        let bouqs=0;
        for(const val of bloomDay) {
            if(val>mid) flowers=0;
            else flowers++
            if(flowers==k) {
                bouqs++
                flowers=0
        }
           
    } 
         if(bouqs>=m) right=mid;
            else left=mid+1
}
    return left;
}