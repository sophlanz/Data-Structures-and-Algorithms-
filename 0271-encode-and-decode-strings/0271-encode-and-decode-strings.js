/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
      return btoa(strs.join("/\./\/"));
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
     return atob(s).split("/\./\/")
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
