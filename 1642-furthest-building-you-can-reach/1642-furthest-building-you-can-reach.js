/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    let minHeap = new MinPriorityQueue();
    for(let i=1;i<heights.length;i++) {
        const diff = heights[i]-heights[i-1];
        if(diff >0){
            minHeap.enqueue(diff).element;
            if(minHeap.size()> ladders) {
                let smallestDiff = minHeap.dequeue().element;
                bricks -= smallestDiff;
                if(bricks < 0) {
                    return i-1
                }
            }
        }
    }
    return heights.length-1
};