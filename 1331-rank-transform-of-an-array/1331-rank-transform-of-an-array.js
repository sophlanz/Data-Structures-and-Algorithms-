/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
       let clone = [...arr];
    let hash = {};
    let rank = 1;
    clone.sort((a,b)=>a-b).map((a,b)=>{
        if (!hash[a]) {
            hash[a] = rank;
            rank++
        };
    });
    console.log(clone)
    console.log(hash)
    return arr.map((a)=>hash[a]);
};