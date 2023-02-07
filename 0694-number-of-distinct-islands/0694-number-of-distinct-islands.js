/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let seen = new Set();
    const DFS = (i,j) => {
        if(i<0 || j<0 || i>= rows || j>= cols || grid[i][j] === 0) return;
        grid[i][j] = 0;
        let str=""
        const dict = [[1,0,"D"], [-1,0,"U"], [0,1,"R"], [0,-1,"L"]];
        for(const [r,c,move] of dict) {
            str += move;
            str += DFS(i+r, j+c)
         
        }
        return str;
        
    }
    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
            if(grid[i][j]===1) {
                let pattern = DFS(i,j);
                if(!seen.has(pattern))seen.add(pattern);
            }
        }
    }
    return seen.size
};