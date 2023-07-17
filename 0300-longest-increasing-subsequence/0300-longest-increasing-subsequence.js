/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let res= [];
    let size = 0;
    for (let num of nums) {
        let l = 0, r = size;
        while (l != r) {
            let mid = Math.floor((l + r) / 2)

            if (res[mid] < num)
                l = mid + 1;
            else
                r = mid;
        }
        res[l] = num;
        if (l == size) ++size;
    }
    return size;

};
[10,9,2,5,3,7,101,18]
