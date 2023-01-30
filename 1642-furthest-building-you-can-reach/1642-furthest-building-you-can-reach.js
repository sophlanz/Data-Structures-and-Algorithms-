/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    let minHeap = new MinPriorityQueue();
    let l=0,
        r=1;
    while(r<=heights.length-1) {
        const diff = heights[r]-heights[l];
        if(diff >0 ) {
            minHeap.enqueue(diff).element;
            if(ladders < minHeap.size()) {
                let smallestDiff = minHeap.dequeue().element;
                bricks -= smallestDiff;
                if(bricks<0) return l; 
            }
        }
        l++
        r++
    }
    return heights.length-1
};