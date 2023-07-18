/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let found=[];
    for(const arr of matrix){
        if(target>= arr[0] && target <= arr[arr.length-1]){
            found=arr;
        }
    };
    if(!found.length)return false
    for(const num of found){
        if(num===target)return true;
    }
    return false
};