/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let start=0,
        maxLength=0,
        basket = { };
    //loop through fruits
    for(let end=0; end<fruits.length;end++) {
    //get right fruit, add to basket, keep adding until basket length is more than 2
        const rFruit = fruits[end];
        basket[rFruit] = basket[rFruit] + 1 || 1;    
    //while basket length is longer than 2
        while(Object.keys(basket).length > 2) {
    //get the left fruit and remove it from the basket
    const lFruit = fruits[start];
    basket[lFruit] --
    //once that fruit of the basket is decremented to 0, remove it
    basket[lFruit] === 0 ? delete basket[lFruit] : null;
    //move the start pointer over
            start ++
        }
    //get maxLength of window
    maxLength = Math.max(maxLength, end-start +1)
    }
    //return maxLength
    return maxLength
    
};