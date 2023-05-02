/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2=new Set(nums2);
    let dis1=[]
    let dis2=[]
    for(const val of set1){
        if(!set2.has(val))dis1.push(val)
    }
     for(const val of set2){
        if(!set1.has(val))dis2.push(val)
    }
    let res=[];
    res.push(dis1);
    res.push(dis2);
    return res;
};