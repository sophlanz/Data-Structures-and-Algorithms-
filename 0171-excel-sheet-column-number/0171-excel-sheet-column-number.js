/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(s) {
 let total = 0
  for (let i = 0; i < s.length; i++) {
    total = total * 26 + s.charCodeAt(i) - 64
  }
  return total
};