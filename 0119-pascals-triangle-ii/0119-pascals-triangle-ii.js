/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
   if(rowIndex===0){
       return [1]
   }
   if(rowIndex>0){
       let prevRow = getRow(rowIndex-1);
       let res=[1];
       for(let i=1;i<rowIndex;i++){
           res[i]= prevRow[i-1] + prevRow[i];
       }
       res.push(1)
       return res;
   }
 
};
