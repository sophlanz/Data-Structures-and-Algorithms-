/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
 let p1=0,p2=0;
    let count=0;
    while(p2<t.length && p1<s.length){
        if(s[p1]===t[p2]){
            count++
            p1++
            p2++
        }else{
            p1++
        }
    }
    return t.length - count;
};