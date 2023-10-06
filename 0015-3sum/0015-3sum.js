/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res=[];
    nums.sort((a,b)=> a-b);
    for(let i=0;i<nums.length-2;i++){
        const start = nums[i];
        let target = -start
        let front = i+1
        let back = nums.length-1;
        while(front<back) {
            let sum = nums[front]+nums[back];
            if(sum<target){
                front++
            }else if(sum>target){
                back--
            }else{
                const triplet = [start,nums[front],nums[back]]
                res.push(triplet);
                while(nums[front] === triplet[1] && front<back){
                    front++
                }
                while(nums[back]===triplet[2] && front<back){
                    back--
                }
            }
        }
        while(nums[i+1]=== start && i+1<nums.length){
            i++
        }
    }
    return res;
};


