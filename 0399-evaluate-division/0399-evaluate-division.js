/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
 let neighbors = {}
 const evaluate = (query) => {
   const [nom,denom] = query;
     if(!(nom in neighbors)|| !(denom in neighbors)) return -1;
     if(nom === denom ) return 1;
     let queue = neighbors[nom].slice();
     let visited = new Set();
     while(queue.length) {
         const [char,val] = queue.shift();
         if(char == denom) return val;
         visited.add(char);
         const next = neighbors[char];
         next.forEach(([nextChar,nextVal])=>{
                      if(visited.has(nextChar)) return;
         queue.push([nextChar,nextVal*val]);
                      })
     }
 return -1
     
 }
for(let i=0;i<equations.length;i++) {
    const [nom,denom] = equations[i];
    neighbors[nom] ? neighbors[nom].push([denom,values[i]]) : neighbors[nom]=[[denom,values[i]]];
    neighbors[denom] ? neighbors[denom].push([nom, 1/values[i]]) : neighbors[denom] = [[nom,1/values[i]]]
}
    let res=[]
    for(const query of queries) {
        res.push(evaluate(query))
    }
    return res;
};



       