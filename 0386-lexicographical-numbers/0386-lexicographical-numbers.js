/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    
        const arr = [];
    
    function dfs(num) {
        if (num * 10 > n) {
            return;
        }
        
        for(let i = num * 10; i < num * 10 + 10 && i <= n; i++)  {
           arr.push(i);
           dfs(i);
        }
    }
    
   
    
    for(let i = 1; i <= 9 && i <= n; i++) {
        arr.push(i);   
        dfs(i);
    }
    
    return arr;
};