/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length;
    const cols=grid[0].length;
    const DFS = (i,j) => {
        if(i<0 || j<0 || i>=rows || j>=cols || grid[i][j]==="0") return;
        grid[i][j] = "0";
        DFS(i+1,j)
        DFS(i-1,j)
        DFS(i,j+1)
        DFS(i,j-1);
    }
    let count=0
    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
            if(grid[i][j]==="1") {
                count++
                DFS(i,j)
            }
        }
    }
    return count;
};