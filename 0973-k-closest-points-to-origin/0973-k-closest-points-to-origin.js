/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
let squareRoot=[];
    let res=[];
    for(const [x,y]of points){
        let xCalc = (x)*(x);
        let yCalc = (y)*(y);
        squareRoot.push([[x,y],xCalc+yCalc]);
    }
    squareRoot.sort((a,b)=>a[1]-b[1]);
    for(const [coord,calc]of squareRoot){
        res.push(coord)
    }
    return res.slice(0,k)
};