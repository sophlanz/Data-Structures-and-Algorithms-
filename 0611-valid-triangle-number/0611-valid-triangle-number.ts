function triangleNumber(nums: number[]): number {
let count =0;
    nums.sort((a,b)=> a-b)
    for(let k=nums.length-1;k>=2;k--) {
        for(let i=0,j=k-1;i<j;){
            if(nums[i] + nums[j] > nums[k]) {
                count += j-i
                j--
            }else {
                i++
            }
        }
    }
    return count;
};