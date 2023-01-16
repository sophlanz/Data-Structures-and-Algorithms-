
var Leaderboard = function() {
    this.leaderBoard = {};
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    this.leaderBoard[playerId] = this.leaderBoard[playerId]+score || score;
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
   const scores= Object.values(this.leaderBoard).sort((a,b)=> b-a);
    let result = 0;
    let idx=0
    while(K--) {
        result += scores[idx];
        idx++
    }
    return result;
    
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    delete this.leaderBoard[playerId]
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */