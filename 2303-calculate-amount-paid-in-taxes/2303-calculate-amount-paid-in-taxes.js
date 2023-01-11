/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
 let paid = 0;
    let prevUpperBound = 0;
    for(let [upperBound,percent] of brackets) {
        let current = Math.min(income, upperBound-prevUpperBound);
        paid += (current) * (percent/100);
        income -= current;
        prevUpperBound=upperBound;
        if (income === 0) return paid
    }

};