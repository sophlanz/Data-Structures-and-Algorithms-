/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    let res = [];
    let map = new Map()
    map.set(1,0)
    const DFS = (num) => {
        if(map.has(num)) return map.get(num);
        const steps = num % 2 ? DFS(num*3+1) +1 : DFS(num/2) +1
        map.set(num, steps)
         
        return map.get(num);
       
    }
 while(lo<=hi) {
     res.push([lo,DFS(lo)])
     lo++
 } 
    res.sort((a,b)=> a[1]-b[1]);
    return res[k-1][0]
};
 