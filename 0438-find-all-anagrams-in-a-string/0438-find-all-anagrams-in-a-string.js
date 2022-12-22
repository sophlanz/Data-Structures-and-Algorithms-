/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
let start =0,
    mapPattern={},
    match=0,
    res=[];
for(let i=0;i<p.length;i++){
    mapPattern[p[i]] = mapPattern[p[i]] +1 || 1;
}
    for(let end=0;end<s.length;end++) {
        let rChar = s[end];
        if(rChar in mapPattern) {
            mapPattern[rChar]--
            if(mapPattern[rChar]===0) {
                match++
            }
        }
        if(Object.keys(mapPattern).length === match) {
            res.push(start);
        }
        if(end-start+1 >= p.length) {
            let lChar = s[start];
            if(lChar in mapPattern) {
                if(mapPattern[lChar]===0) {
                    match--
                }
                mapPattern[lChar]++
            }
            start++
        }
    }
    return res;
};