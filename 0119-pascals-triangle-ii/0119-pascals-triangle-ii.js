/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {

    let res=[1];
    for(let i=1;i<=rowIndex;i++){
        let prevRes=res;
        res=[];
        let idx=0;
        while(res.length < i){
           if(idx-1 >=0){
               res.push(prevRes[idx-1] + prevRes[idx])
              
           }else{
               res.push(prevRes[idx])
           }
            idx++
        }
        res.push(1);
    }
    return res;
};
