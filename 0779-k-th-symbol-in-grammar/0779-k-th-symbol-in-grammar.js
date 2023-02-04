/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    const flip = (num)=> {
        return num==0 ? 1 :0
    }
	// base case
	if(n==1) {
		return 0;
	}
    
	if(k%2==1) {
		return kthGrammar(n-1, (k+1)/2);
	} else {
		return flip(kthGrammar(n-1, k/2));
	}
    
};
