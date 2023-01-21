/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let arr=[];
    arr[0] = true;
   
   for(let i=0;i<=s.length;i++) {
       if(arr[i] === true)
       for(const word of wordDict) {
           if(s.slice(i, i+ word.length) === word) {
               arr[i+word.length]=true;
           }
       }
   }
    console.log(arr)
    return arr[s.length] ? true: false
};