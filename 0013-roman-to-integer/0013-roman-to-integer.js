/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    s=s.split('');
    let map={
"I":1,
"V":5,
"X":10,
"L":50,
"C":100,
"D":500,
"M":1000
    }
    let count=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==="done")continue;
        let char1=s[i];
        let char2=s[i+1];
        if(map[char1]< map[char2]) {
            count += map[char2]-map[char1];
            s[i+1]="done"  
        }else{
            count+= map[char1]
        }
    }
    return count
};