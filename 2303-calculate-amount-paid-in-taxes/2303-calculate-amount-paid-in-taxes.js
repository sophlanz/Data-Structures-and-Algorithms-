/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    let prevUpper=0;
    let pay=0;
    for(const[upperBound,percent]of brackets){
        let amount = Math.min(income, upperBound-prevUpper);
        pay += amount* (percent/100)
        income -= amount;
        prevUpper=upperBound;
    }
    return pay
};