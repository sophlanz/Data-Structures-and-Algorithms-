/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    //get pivot
    let pivot =-1;
    for(let i=nums.length-1;i>0;i--) { //get first decrease in values
        if(nums[i]>nums[i-1]) {
            pivot = i-1;
            break;                  //once found, break
        }
    }
    if(pivot=== -1) {
        return nums.reverse();
    }
    for(let j=nums.length-1;j>pivot;j--) {              //get first number greater than pivot, to the right of pivot 
        if(nums[j]>nums[pivot]) {   
            [nums[j], nums[pivot]]= [nums[pivot], nums[j]]
            break;                                      //once found, break
        }
    };
    for(let i=pivot+1, j=nums.length-1;i<j;i++,j--) {   //to the left of pivot. we want to change these numbers from descending order to ascending order.
                                                        //This allows us to get the next greater number. The swap doesn't change the descending order of                                                                          arr[pivot+1...end].
         [nums[j], nums[i]]= [nums[i], nums[j]]
    }
    return nums
};