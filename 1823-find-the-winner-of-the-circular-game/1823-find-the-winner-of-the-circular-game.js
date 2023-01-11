/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
let queue = [];
    for(let i=1;i<=n;i++) {
        queue.push(i);
    }
    while(queue.length !==1) {
        let x = k
        while(x>1) {
            let temp = queue.shift();
            queue.push(temp);
            x--
        }
        queue.shift();
    }
    return queue[0];
};