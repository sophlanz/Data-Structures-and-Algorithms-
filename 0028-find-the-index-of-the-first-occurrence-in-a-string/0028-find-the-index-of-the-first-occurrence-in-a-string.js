/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	//edge cases
    if(needle.length <= 0 || needle === haystack) return 0
    if(needle.length > haystack.length) return -1
    
    //sliding window
    //for loop to check if any values needle.length exist within window
	//left is beginning of window, right is end of window, continue until it's gone through entire array
    let left = 0;
	//start right at needle length, so window is never bigger than needle
    for(let right = needle.length; right <= haystack.length; right++){
        let temp = haystack.slice(left, right)
		//if needle is found, return it's starting index which is "left"
        if(temp === needle) return left
		//else continue with window
        left++
    }
    
	//if nothing is found, return -1
    return -1
};