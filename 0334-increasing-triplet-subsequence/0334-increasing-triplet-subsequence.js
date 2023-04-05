/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
   let small = Math.max(...nums), mid = Math.max(...nums);
        for (const n of nums) {
            if (n <= small) small = n;  // update small if n is smaller than both
            else if (n <= mid) { mid = n; } // update big only if greater than small but smaller than big
            else return true; // return if you find a number bigger than both
        }
        return false;
 
};

