/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
    let found=true;
    const rows = board.length;
    const cols = board[0].length;
    while(found) {
        found= false;
        for(let i=0;i<rows;i++) {
            for(let j=0;j<cols;j++) {
                let value = Math.abs(board[i][j])
                if(value === 0) continue;
                if(i+2 < rows && Math.abs(board[i+1][j]) === value && Math.abs(board[i+2][j]) === value) {
                    found=true;
                    board[i][j] = board[i+1][j] = board[i+2][j] = -value;
                }
                if(j+2 < cols && Math.abs(board[i][j+1])===value && Math.abs(board[i][j+2])===value ) {
                    found=true;
                    board[i][j] = board[i][j+1] = board[i][j+2] = -value;
                }
            }
        }
        if(found) {
            for(let j=0;j<cols;j++) {
                let idx = rows-1;
                for(let i=idx;i>=0;i--) {
                    if(board[i][j] >0) {
                          board[idx][j] = board[i][j];
                        idx--
                    }
                }
                for(let i=idx;i>=0;i--) {
                    board[i][j] = 0;
                }
            
            }
        }
    }
    return board
    
};