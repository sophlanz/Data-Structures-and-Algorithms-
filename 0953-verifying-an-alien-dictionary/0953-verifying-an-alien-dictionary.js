/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  
let letterOrder = new Array(order.length).fill(0);
    for(let i=0;i<order.length;i++){
        letterOrder[order.charCodeAt(i)-97] = i
    }
    console.log(letterOrder)
        for(let i=0;i<words.length-1;i++){
            if(words[i].startsWith(words[i+1]) && words[i].length !== words[i+1].length){
                return false
            }
       for(let j=0;j<words[i].length;j++){
           if(words[i].charAt(j) !== words[i+1].charAt(j)){
               if(letterOrder[words[i].charCodeAt(j)-97] > letterOrder[words[i+1].charCodeAt(j)-97]){
                   return false;
               }else{
                   break;
               }
           }
       }
    }
    return true
};