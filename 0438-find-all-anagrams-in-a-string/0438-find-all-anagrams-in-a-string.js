/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let start=0,
        match=0,
        map={};
    const res=[];
    for(let i=0; i<p.length;i++) {
        map[p[i]] = map[p[i]]+1 || 1
    }
    for(let end=0;end<s.length;end++) {
        let rChar=s[end];
           
        if(rChar in map) {
            map[rChar]--
            if(map[rChar]===0){
                match++
            }
        }
        if(match === Object.keys(map).length) {
            res.push(start);
        }
        if(end>=p.length-1) {
            let rChar = s[start];
            if(rChar in map) {
                if(map[rChar]===0) {
                    match--
                }
                map[rChar]++
            }
            start++
        }
    }
    return res
};