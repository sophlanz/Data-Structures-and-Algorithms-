/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let res=[];
    for(let i=0;i<nums.length-2;i++){
        const num=nums[i]
        let target = -num
        let front = i+1
        let back=nums.length-1;
        while(front<back){
            const sum = nums[front] + nums[back];
            if(sum>target){
                back--
            }else if(sum<target){
                front++
            }else{
                const triplet = [nums[i], nums[front], nums[back]];
                res.push(triplet)
                while(nums[back] === triplet[2] && back>front){
                    back--
                }
                while(nums[front]===triplet[1] && back>front){
                    front++
                }
            }
        }
        while(nums[i+1]===num){
            i++
        }
    }
    return res
};

