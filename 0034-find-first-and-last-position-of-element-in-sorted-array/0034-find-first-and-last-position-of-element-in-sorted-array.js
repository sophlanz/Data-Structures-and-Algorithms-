/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
            //target<=mid search left  if=== mid, record index , search left and right
            //else search right
            //while nums[mid+1]  === target and nums[mid-1]
             //sort indexes and return
    let l=0,r=nums.length-1;
    let indexes=[];

    while(l<=r) {
        let mid = Math.floor((l+r)/2);
        if(nums[mid]===target) {
            //get start
           let start=mid;
            while(nums[start-1]===target) {
                start--
            }
            let end=mid
            while(nums[end+1]===target){
                end++
            }
            return[start,end]
        }else if(nums[mid]<target) {
            l=mid+1
        }else{
            r=mid-1;
        }
    }
   return [-1,-1]
    
};