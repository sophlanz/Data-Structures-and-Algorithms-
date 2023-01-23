/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let clone = [...arr];
    let rankMap={};
    let rank=1
    clone.sort((a,b)=> a-b).map((a)=> {
        if(!rankMap[a]) {
            rankMap[a] = rank;
            rank++
        }
    });
   return arr.map((a)=> rankMap[a]);
    
};