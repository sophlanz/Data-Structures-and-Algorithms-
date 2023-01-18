/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
    const rows = board.length;
    const cols = board[0].length;
    let found = true;
    while(found) {
        found=false;
        for(let i=0;i<rows;i++) {
            for (let j=0;j<cols;j++) {
                let val = Math.abs(board[i][j]);
                if(val === 0 ) continue;
                if(i<rows-2 && val === Math.abs(board[i+1][j]) && val === Math.abs(board[i+2][j])) {
                    found = true;
                    board[i][j] = board[i+1][j] = board[i+2][j] = -val;
                }
                if(j<cols-2 && val === Math.abs(board[i][j+1]) && val=== Math.abs(board[i][j+2])) {
                    found=true;
                    board[i][j] = board[i][j+1] = board[i][j+2] = -val;
                }
            }
        
        }
        if(found) {
            for(let j=0;j<cols;j++) {
                let idx = rows-1;
                for(let i=idx;i>=0;i--) {
                    if(board[i][j]>0) {
                        board[idx][j] = board[i][j]
                        idx--
                    }
                }
                for(let i=idx;i>=0;i--) {
                    board[i][j] = 0
                }
            }
        }
    }
    return board;
};