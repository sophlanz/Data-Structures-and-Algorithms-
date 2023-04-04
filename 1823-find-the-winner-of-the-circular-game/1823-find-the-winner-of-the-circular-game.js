/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let queue=[];
    while(n>0) {
        queue.unshift(n)
        n--
    }
    while(queue.length > 1){
        let x=k
        while(x>1){
            queue.push(queue.shift())
            x--
        }
        queue.shift();
    }
    return queue[0];
};