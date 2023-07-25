/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let minHeap=new MaxPriorityQueue();
    let max=nums[0];
    if(nums.length ===1)return max
    if(k==1)return Math.max(...nums)
    for(let i=1;i<nums.length;i++){
        let num=nums[i];
        if(num >max){
            minHeap.enqueue(max).element;
            max=num;
        }else{
            minHeap.enqueue(num).element;
        }
    }
    let res
    while(k>1){
    
        res=minHeap.dequeue().element
        k--

    }
    return res
};