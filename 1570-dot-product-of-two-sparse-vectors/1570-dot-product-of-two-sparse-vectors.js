/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.nums=[];
    for(let i=0;i<nums.length;i++) {
        if(nums[i] !== 0) this.nums.push([nums[i],i])
    }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let p1=0,
        sum=0,
        p2=0;
    while(p1 <this.nums.length && p2<vec.nums.length) {
        if(this.nums[p1][1]=== vec.nums[p2][1]){
            sum += this.nums[p1][0] * vec.nums[p2][0];
            p1++
            p2++
        }else {
            if(this.nums[p1][1]< vec.nums[p2][1]) p1++
            else p2++
        }
    }
    return sum
    
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);