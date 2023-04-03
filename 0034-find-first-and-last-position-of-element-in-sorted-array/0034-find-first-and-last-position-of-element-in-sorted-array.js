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
            indexes.push(mid);
            let idx=mid;
            while(nums[idx-1]===target) {
                indexes.push(idx-1);
                idx--
                
            }
            idx=mid;
            while(nums[idx+1]===target){
                indexes.push(idx+1);
                idx++
            }
            break;
        }else if(nums[mid]<target) {
            l=mid+1
        }else{
            r=mid-1;
        }
    }
    indexes.sort((a,b)=>a-b);
    console.log(indexes)
    let res = [indexes[0], indexes[indexes.length-1]];
    
    
    return indexes.length ? res : [-1,-1]
    
};