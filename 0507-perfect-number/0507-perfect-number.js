/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let x= 1;
    let divisors = [];
    while(x<= num/2){
        if(num%x === 0)divisors.push(x);
        x++
    }
    let sum =0;
   for(const num of divisors){
       sum += num;
   } 
    return sum === num
};