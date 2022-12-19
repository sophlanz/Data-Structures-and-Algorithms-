/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let start=0,
        map={},
        maxLen=0;
for(let end=0;end<fruits.length;end++){
    let rChar = fruits[end];
    map[rChar] = map[rChar] +1 || 1
    if(Object.keys(map).length>2) {
        //shrink the widnow
        let lChar = fruits[start];
        map[lChar]--
        if(map[lChar]===0) {
            delete map[lChar]
        }
        start++
    }
    maxLen=Math.max(maxLen,end-start+1);
}
    return maxLen
};