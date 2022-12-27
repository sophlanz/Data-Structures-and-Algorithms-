/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    
let result =[];
    let i=0;
    let j=0;
while(i<firstList.length && j <secondList.length) {
    let aOverlapB = firstList[i][0] >= secondList[j][0] && firstList[i][0]<= secondList[j][1];
    let bOverlapA = secondList[j][0] >= firstList[i][0] && secondList[j][0] <= firstList[i][1];
    if(aOverlapB || bOverlapA) {
        result.push([Math.max(firstList[i][0],secondList[j][0]),Math.min(secondList[j][1], firstList[i][1])]);
    }
    if(firstList[i][1]<secondList[j][1]) {
        i++
    } else {
        j++
    }
}
    return result
};