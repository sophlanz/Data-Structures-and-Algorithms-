/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
 let paid = 0;
    let prevUpperBound=0;
    for(let [upperBound,percent] of brackets) {
        let currentDue = Math.min(income, upperBound-prevUpperBound);
        income -= currentDue;
        paid += (currentDue) * (percent/100);
        prevUpperBound = upperBound
    }
    return paid
};