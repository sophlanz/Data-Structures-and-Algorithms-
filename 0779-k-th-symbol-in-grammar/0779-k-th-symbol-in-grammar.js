/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    if(n===1) return 0;
    const flip = (num)=> {
        return num===0 ? 1 : 0;
    }
    if(k%2===0) {
        return flip(kthGrammar(n-1, k/2))
    }else {
        return kthGrammar(n-1,(k+1)/2)
    }
};




