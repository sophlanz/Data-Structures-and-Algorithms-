/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
   let prevBound = 0, 
       pay=0,
    sum=0;
    for(const [bound,tax]of brackets) {
        let toPay = Math.min(bound-prevBound, income);
        income -= toPay;
        sum += toPay * (tax/100);
        prevBound = bound;
    }
    return sum;
};