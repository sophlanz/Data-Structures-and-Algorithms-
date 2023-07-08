/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

    for(let i=0;i<flowerbed.length;i++){
        let prev = flowerbed[i-1];
        let next = flowerbed[i+1];
        if(flowerbed[i] !== 1 && prev !== 1 && next !==1 ) {
            n--
            flowerbed[i]=1;
        }
    }
    return n<=0
};