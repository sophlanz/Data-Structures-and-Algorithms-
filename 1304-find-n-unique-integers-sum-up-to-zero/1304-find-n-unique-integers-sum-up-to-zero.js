/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
let arr = []
    let sum = 0
    for (let i=1; i < n; i++) {
        console.log(arr)
        console.log(sum)
        arr.push(i)
        sum = sum + i
    }
    arr.push(-sum)
    return arr
};