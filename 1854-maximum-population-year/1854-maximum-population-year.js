/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    let year =0;
    let arr = new Array(101).fill(0);
    for(const [birth,death] of logs) {
        arr[birth-1950]++;
        arr[death-1950]--;
    }
    for(let i=1;i<arr.length;i++) {
        arr[i] += arr[i-1];
        if(arr[i]> arr[year]) {
            year=i
        }
    }
    return year+1950
};