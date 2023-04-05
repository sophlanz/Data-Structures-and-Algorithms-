/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let small = Math.max(...nums);
    let mid = Math.max(...nums);
    for(const n of nums){
        if (n<=small) small=n;
        else if(n<=mid) {mid =n}
        else return true
    }
    return false
};
