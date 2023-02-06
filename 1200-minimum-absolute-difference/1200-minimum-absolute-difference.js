/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
   arr.sort((a,b)=>a-b);
    let diff = Infinity;
    for(let i=1;i<arr.length;i++) {
        diff = Math.min(diff, arr[i]-arr[i-1])
    }
    let res = [];
    for(let i=1;i<arr.length;i++) {
        if(arr[i]-arr[i-1]===diff) res.push([arr[i-1],arr[i]])
    }
    return res;
};