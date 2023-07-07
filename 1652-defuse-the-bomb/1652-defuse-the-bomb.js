/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    if(k===0){
        return Array(code.length).fill(0);
    }
    let start = 1;
    let end=k;
    if(k<0){
        end=code.length-1;
        start=code.length+k
    }
    let sum=0;
    for(let i=start;i<=end;i++){
        sum+= code[i];
    }
    let res=[];
    for(let i=0;i<code.length;i++){
        res.push(sum);
        sum -= code[start++%code.length]
        sum += code[++end%code.length]
    }
    return res
};