/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
let start=0,
    match=0,
    map={};
    for(let i=0;i<s1.length;i++) {
      map[s1[i]] = map[s1[i]] +1 || 1
    }
    for(let end=0;end<s2.length;end++) {
        let rChar = s2[end];
        if(rChar in map) {
            map[rChar]--
            if(map[rChar]===0) {
                match++
            }
        }
        if(Object.keys(map).length === match) {
            return true
        }
        if(end >= s1.length-1) {
            let lChar = s2[start]
            if(lChar in map) {
                if(map[lChar]=== 0) {
                    match--
                }
                map[lChar]++
            }
            start++
        }
    }
    return false
};