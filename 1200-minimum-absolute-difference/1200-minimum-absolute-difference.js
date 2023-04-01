/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  arr.sort((a,b)=> a-b);
    let minDiff=Infinity;
    for(let i=1;i<arr.length;i++) {
        const diff = arr[i]- arr[i-1];
        minDiff = Math.min(minDiff,diff);
    }
    let res=[];
    for(let i=1;i<arr.length;i++) {
        const diff = arr[i]-arr[i-1];
        if(diff === minDiff) res.push([arr[i-1], arr[i]]);
    }
    return res;
};