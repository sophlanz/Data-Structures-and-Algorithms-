/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
   let prevUpperBound=0
   let paid = 0;
   for(const [upperBound, percent] of brackets) {
       let due = Math.min(upperBound-prevUpperBound, income);
       income -= due
       paid += due* (percent/100);
       prevUpperBound = upperBound;
   }
    return paid
};