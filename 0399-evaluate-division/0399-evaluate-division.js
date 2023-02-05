/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
        let neighbors = {};
    
    equations.forEach(([nom, denom], idx) => {
        const val = values[idx];
        neighbors[nom] ? neighbors[nom].push([denom,val]) : neighbors[nom]= [[denom,val]];
        neighbors[denom] ? neighbors[denom].push([nom, 1 / val]): neighbors[denom]=[[nom,1 / val]];
      
    });
   
    let result = [];
    for (let query of queries) {
        result.push(evaluate(query, neighbors));
    }
  
    
    return result;
};

function evaluate(query, neighbors) {
    const [nom, denom] = query;
    if (!(nom in neighbors) || !(denom in neighbors)) return -1;
    if (nom === denom) return 1;
    
    let queue = neighbors[nom].slice();
  console.log(queue)
    let visited = new Set();
    
    while (queue.length) {
        const [variable, value] = queue.shift();
       
        if (variable === denom) return value;
        visited.add(variable);
        
        const next = neighbors[variable];
        next.forEach(([next, nextValue]) => {
            if (visited.has(next)) return;
            queue.push([next, nextValue * value]);
        });
    }
    
    return -1;
};