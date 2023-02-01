/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
    const rows = grid.length, cols = grid[0].length;
    const seen = new Set();    
    let counter = 0;
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(grid[i][j]===1) {
                const pathSign = DFS(i, j);
                if(!seen.has(pathSign)) {
                    seen.add(pathSign)
                    counter++;
                }
            }
        }
    }
    return counter;
    
    function DFS(i, j) {
        if(i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j]===0) return '';
        grid[i][j] = 0;
        
        const dir = [[0, 1, 'R'], [0, -1, 'L'], [1, 0, 'D'], [-1, 0, 'U']];
        let str = ''
        
        for(let [r, c, sign] of dir) {
            str += sign
         
            str += DFS(i+r, j+c);
        }
  
        return str;
    }
};