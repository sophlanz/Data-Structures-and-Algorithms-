/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    const DFS = (i,j,index)=> {
        if(index == word.length) return true;
        if(i<0 || j<0 || i>=rows || j>=cols || board[i][j] !== word[index]) return;
        board[i][j]='-1'
        if(DFS(i,j+1,index+1) ||
           DFS(i,j-1,index+1)||
           DFS(i-1,j,index+1)||
           DFS(i+1,j,index+1)
          )return true
        else{
            board[i][j]=word[index]
            return false
        }
        
    }
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(board[i][j] === word[0]){
               if(DFS(i,j,0)) return true
            }
        }
    }
    return false
};
