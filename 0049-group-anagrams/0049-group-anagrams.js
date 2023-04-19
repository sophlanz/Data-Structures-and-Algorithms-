/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let anaMap={};
    for(const char of strs){

        let key = char.split('').sort().join('');
        anaMap[key] ? anaMap[key].push(char) : anaMap[key] = [char];
    }
    return Object.values(anaMap)
};