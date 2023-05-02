/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let count=0;
    let vals=[];
    for(const val of operations){
        if(!isNaN(val)){
            vals.push(val)
        }
        if(val === "C"){
            vals.pop();
        }
        if(val=="D"){
            let score = vals[vals.length-1];
            score = score*2;
            vals.push(score);
        }
        if(val=="+"){
            let score = Number(vals[vals.length-1])+ Number(vals[vals.length-2]);
            vals.push(score);
        }
    }
    console.log(vals)
    
    for(const score of vals){
        count+= Number(score);
    }
    return count;
};