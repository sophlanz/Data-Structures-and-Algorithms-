/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
   let left = Math.min(...bloomDay), right = Math.max(...bloomDay);
        if (m * k > bloomDay.length) return -1;
        while (left < right) {
            let mid = Math.floor((left + right)/2) , flow = 0, bouq = 0;
            for (let j = 0; j < bloomDay.length; j++) {
                if (bloomDay[j] > mid) {
                    flow = 0;
                } else {
                    flow++
                }if (flow >= k) {
                    bouq++;
                    flow = 0;
                }
            }
            if (bouq >= m) {
                right=mid
            } else {
                left=mid+1
            }
        }
        return left;
}