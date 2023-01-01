/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
 let count = 0;
 let rows = grid.length;
let cols = grid[0].length;
	function callDFS(grid, i, j) {
        //return if it is not a valid cell or a water cell
		if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] == '0') {
			return;
		}
		//mark cell as visited by making it a water cell
		grid[i][j] = '0';
		//recursively visit all cells
		callDFS(grid, i + 1, j); // down
		callDFS(grid, i - 1, j); // up
		callDFS(grid, i, j + 1); // right
		callDFS(grid, i, j - 1); // left
       
	}

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (grid[i][j] == '1') {
				count ++;
				callDFS(grid, i, j);
                console.log(count)
    
			}
		}
	}
	
	return count;
}






