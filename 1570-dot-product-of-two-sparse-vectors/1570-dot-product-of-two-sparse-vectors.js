/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
         this.nums = []
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] !== 0) {
                this.nums.push([i, nums[i]])
            }
        }
    console.log(this.nums)
 
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
      let res = 0, 
            left = 0, 
            right = 0
        while (left < this.nums.length && right < vec.nums.length) {
            if (this.nums[left][0] === vec.nums[right][0]) {
                res += this.nums[left][1] * vec.nums[right][1]
                left++
                right++
            } else if (this.nums[left][0] < vec.nums[right][0]) {
                left++
            } else {
                right++
            }
            console.log(res)
        }
        return res
        
    
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);