/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
const rows = grid.length;
    const cols = grid[0].length
    let count=0;
    const DFS = (i,j) => {
        if(i<0 || j<0 || i>=rows || j >= cols || grid[i][j]==="0") {
            return;
        }
        grid[i][j]="0";
        DFS(i+1,j)//down
        DFS(i-1,j)//up
        DFS(i,j+1)//right
        DFS(i,j-1)//left
    }
    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
            if(grid[i][j]==="1") {
                DFS(i,j)
                 count++
            }
           
        }
    }
    return count
};
