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
                const pathSign = callDFS(i, j);
                if(!seen.has(pathSign)) {
                    seen.add(pathSign)
                    counter++;
                }
            }
        }
    }
    return counter;
    
    function callDFS(r, c) {
        if(r < 0 || c < 0 || r >= rows || c >= cols || !grid[r][c]) return '';
        grid[r][c] = 0;
        
        const dir = [[0, 1, 'R'], [0, -1, 'L'], [1, 0, 'D'], [-1, 0, 'U']];
        let str = ''
        
        for(let [dr, dc, sign] of dir) {
            str += sign
            str += callDFS(r+dr, c+dc);
        }
        return str;
    }
};