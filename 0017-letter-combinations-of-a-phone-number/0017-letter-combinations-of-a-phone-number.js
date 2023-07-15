/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length)return []
    let digitMap={
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    };
let res=[]
    const DFS=(str,index)=>{
        if(index === digits.length) {
            res.push(str);
            return;
        }
        for(let char of digitMap[digits[index]]){
            DFS(str+char, index+1)
        }
    }
    DFS('',0)        
    return res;
};
         
  