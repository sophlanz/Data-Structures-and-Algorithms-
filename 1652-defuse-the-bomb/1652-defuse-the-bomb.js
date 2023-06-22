/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    //k>0 => next k nums => move r 
    //k<0 =>previous k nums => move l
    //k==0=>0
    
    //if k>0, move pointer k times to right
    //if k<0 move pointer k times to left
    //if outside bounds of array, <0 => end of array, >length of array => beginning
   if(k===0) {
       return new Array(code.length).fill(0);
   }
    let res=[];
    for(let i=0;i<code.length;i++){
        let sum=0
        if(k > 0){
            let idx=i+1
            let count=k
            while(count>0){
                if(idx>code.length-1){
                    idx=0
                }
                sum+= code[idx];
                console.log({idx})
                idx++
                count--
                console.log(sum)
            }
            
        }else{
            let idx=i-1;
            let count=k;
            while(count <0){
                if(idx<0){
                    idx=code.length-1
                }
                sum += code[idx];
                idx--
                count++
            }
        }
        res[i]=sum;

    }
    return res
    
};