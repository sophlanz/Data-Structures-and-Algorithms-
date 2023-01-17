/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    let paid = 0;
    let prevUpperBound=0;
    for(let [upperBound,percent] of brackets) {
        let currentDue = Math.min(income,upperBound-prevUpperBound);
        paid += (currentDue) * (percent/100);
        income -= currentDue;
        prevUpperBound = upperBound;
        
    }
    return paid;
};