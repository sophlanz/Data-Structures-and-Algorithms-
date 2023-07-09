/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s=s.trim().replace(/\s+/g," ")
  return  s.split(' ').reverse().join(' ');
  
  

};