/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
   let r=1, l=0;
    let minHeap = new MinPriorityQueue();
    while(r<=heights.length-1) {
        const building1 = heights[l];
        const building2 = heights[r];
        const diff = building2-building1
        if(diff > 0 ) {
            minHeap.enqueue(diff).element;
            if(minHeap.size()>ladders) {
                let brickDiff = minHeap.dequeue().element;
                bricks -= brickDiff
            }
            if(bricks <0) return l
             
        }
        l++
        r++
    }
    return l
};