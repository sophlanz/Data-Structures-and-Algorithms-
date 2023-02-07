/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let res=[];
    const DFS = (num) => {
        if(num*10>n) return 
        for(let i=num*10;i<=n && i< num*10+10;i++) {
            res.push(i);
            DFS(i);
        }
    }
    for (let i=1;i<=n && i<=9;i++) {
        res.push(i);
        DFS(i)
    }
    return res;
};