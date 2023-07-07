/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    if(k===0){
        return Array.from(code).fill(0);
    };
    //k>0
    let start=1;
    let end = k;
    if(k<0){
        start= code.length+k;
        end=code.length-1
    }
    let res=[];
    let sum=0
    for(let i=start;i<=end;i++){
        sum+= code[i];
    }
   for(let i=0;i<code.length;i++){
        res[i]=sum;
       sum -= code[start++ % code.length]
       sum += code[++end % code.length]
   }
    return res;
};