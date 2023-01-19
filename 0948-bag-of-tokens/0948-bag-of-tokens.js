/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
 tokens.sort((a,b)=> a-b);
    let score=0,
        maxScore=0,
        l=0,
        r=tokens.length-1;
    while(l<=r) {
        if(power >= tokens[l]) {
            power -= tokens[l];
            score++;
            l++
        }else if (score >=1) {
            power += tokens[r];
            r--
            score--
        }else {
            break;
        }
        maxScore = Math.max(maxScore, score);
    }
return maxScore
};