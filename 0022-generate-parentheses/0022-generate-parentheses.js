/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res=[];
  const DFS=(o,c,s)=>{
      if(s.length === n*2)res.push(s);
      if(o<n) DFS(o+1,c,s+"(")
      if(c < o)DFS(o,c+1,s+")")
  }
  DFS(1,0,'(')
    return res
};