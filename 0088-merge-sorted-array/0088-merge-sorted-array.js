/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    for(let j=nums1.length-1,p1=m-1,p2=n-1;p2>=0;j--){
        if(p1>=0 && nums1[p1]>= nums2[p2]){
            nums1[j]=nums1[p1]
            p1--
        }else{
            nums1[j]=nums2[p2];
            p2--
        }
    }
    return nums1
};