/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a,b)=> a-b)
    let l=0,
        r=tokens.length-1,
        score=0,
        maxScore=0;
    while(l<=r) {
        if(power >= tokens[l]) {
            score++
            power -= tokens[l]
            l++
        }else if ( score >=1) {
            score--;
            power += tokens[r];
            r--
        }else {
            break;
        }
        maxScore = Math.max(score, maxScore);
    }
    return maxScore;
}