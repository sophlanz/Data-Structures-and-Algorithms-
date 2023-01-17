/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    for(let i=nums1.length-1,a=m-1,b=n-1;b>=0;i--) {
        if(a>= 0 && nums1[a] > nums2[b]) {
            nums1[i] = nums1[a];
            a--
        }else {
            nums1[i] = nums2[b];
            b--
        }
    }
    return nums1
};