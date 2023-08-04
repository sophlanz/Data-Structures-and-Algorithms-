/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
let dp =new Array(word2.length+1).fill().map(()=> new Array(word1.length+1))
for(let j=0;j<=word1.length;j++){
    dp[0][j]=j
}
for(let i=0;i<=word2.length;i++){
    dp[i][0]=i
}
const rows = dp.length;
const cols = dp[0].length;
    for(let i=1;i<rows;i++){
        for(let j=1;j<cols;j++){
            if(word2[i-1] === word1[j-1]){
                dp[i][j] = dp[i-1][j-1];
            }else{
                let min = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
                dp[i][j]=min+1
            }
        }
    }
    return dp[rows-1][cols-1]
};
