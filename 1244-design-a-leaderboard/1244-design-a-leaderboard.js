
var Leaderboard = function() {
    this.map = {};
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    this.map[playerId] = this.map[playerId] + score || score;
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    const scores = Object.values(this.map).sort((a,b)=> b-a);
    let sum =0;
    let idx = 0;
    while(K--) {
        sum += scores[idx];
        idx++
    }
    return sum;
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    delete this.map[playerId];
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */