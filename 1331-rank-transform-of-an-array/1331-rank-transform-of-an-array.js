/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
let rankMap = {};
    let clone = [...arr];
    let rank=1
    clone.sort((a,b)=> a-b);
    clone.forEach((num)=> {
        if(!rankMap[num]) {
            rankMap[num]=rank;
            rank++
        }
    })
    return arr.map((val)=> rankMap[val])
    
};