/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
 let start=0,
     max=0,
     basket={};
    for(let end=0;end<fruits.length;end++) {
      basket[fruits[end]] = basket[fruits[end]] +1 || 1;
        while(Object.keys(basket).length >2) {
            basket[fruits[start]]--
            if(basket[fruits[start]]===0) {
                delete basket[fruits[start]]
            }
            start++
        }
        max= Math.max(max,end-start+1)
    }
    return max
    
};