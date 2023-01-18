/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length;
    let cols = board[0].length;
    const DFS = (i,j,idx) => {
        if(idx === word.length) return true
        if(i<0 || j<0 || i>= rows || j>=cols || board[i][j] !== word[idx]) return false;
        board[i][j] =0;
        if(DFS(i+1,j,idx+1) ||
          DFS(i-1,j,idx+1) ||
           DFS(i,j+1,idx+1) ||
           DFS(i,j-1,idx+1)
          )return true
        else {
            board[i][j] = word[idx];
        }
    }
    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
            if(board[i][j] === word[0] && DFS(i,j,0)){
                return true;
            }
        }
    }
    return false;
};