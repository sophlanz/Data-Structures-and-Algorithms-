/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res=[[1]];
    for(let i=1;i<numRows;i++){
        let currRow=[1];
        let currIdx=1;
      while(currRow.length !== i){
          if(res[i-1]) {
                let sum = res[i-1][currIdx-1] + res[i-1][currIdx]
          currRow.push(sum);
          currIdx++
          }else{
              break
          }
      }
        currRow.push(1);
        res.push(currRow)
    }
    return res;
    
};