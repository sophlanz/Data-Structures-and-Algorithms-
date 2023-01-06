/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const DFS = (grid,i,j) => {
        if(i<0 || j<0 || i>=grid.length || j>=grid[0].length || grid[i][j]==="0"){
            return
        }
        grid[i][j] = "0";
        DFS(grid,i+1,j)//down
        DFS(grid,i-1,j)//up
        DFS(grid,i,j-1)//left
        DFS(grid,i,j+1)//right
    }
    let count=0;
    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
            if(grid[i][j]==="1") {
                DFS(grid,i,j)
                count++
            }
        }
    }
    return count;
    
};