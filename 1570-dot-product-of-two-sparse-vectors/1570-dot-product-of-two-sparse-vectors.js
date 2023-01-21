/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.nums =[];
   for(let i=0;i<nums.length;i++) {
       if(nums[i] !== 0) {
           this.nums.push([nums[i],i]);
       }
   }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let a =0;
    let b =0;
    let res = 0
    while(a<this.nums.length && b<vec.nums.length) {
        if(this.nums[a][1] === vec.nums[b][1]) {
            res += this.nums[a][0] * vec.nums[b][0];
            a++
            b++
            console.log(res)
        }else if (this.nums[a][1] > vec.nums[b][1]) {
            b++
        }else {
            a++
        }
    }
    return res;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);