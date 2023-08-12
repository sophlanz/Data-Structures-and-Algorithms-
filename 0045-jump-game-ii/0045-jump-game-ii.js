/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    	let jumps = 0, endOfLevel = 0, longestJump = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		longestJump = Math.max(longestJump, i + nums[i]);
		if (i == endOfLevel) { //visited entire level
			jumps++; //increment level
			endOfLevel = longestJump; //get end of next level
		}
	}
	return jumps;
};
