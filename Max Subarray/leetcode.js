var maxSubArray = (nums,k) => {
    let start=0,
        sum=0,
        maxSum=0;
    for(let end=0; end<nums.length;end++) {
      //add the next element
      sum += nums[end]
      //if we've hit k, slide the window
      if(end >= k-1) {
        //get max
        maxSum = Math.max(maxSum,sum)
        //remove start from sum
        sum -= nums[start]
        //move window to the left
        start++
      }
    }
    return maxSum
  }
  const nums = [2, 1, 5, 1, 3, 2];
  const k=3 ;
  console.log(maxSubArray(nums,k))