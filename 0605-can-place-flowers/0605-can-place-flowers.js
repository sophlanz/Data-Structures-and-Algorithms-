/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let map = {};
   for(let i=0;i<flowerbed.length;i++){
       if(flowerbed[i]===1){
           map[i] = 1;
       }
   }

    for(let i=0;i<flowerbed.length;i++){
        if(flowerbed[i]===0){
            if(!map[i-1] && !map[i+1]){
                n--
                map[i] =1;
            }
        }
    }
    return n<=0
};