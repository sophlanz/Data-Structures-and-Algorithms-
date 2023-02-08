/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
 let minHeap = new MinPriorityQueue();
    let l=0,
    r=1
    while(r<heights.length){
        let diff = heights[r]-heights[l];
        if(diff >0){
            minHeap.enqueue(diff).element;
            if(minHeap.size()> ladders){
                let smallest = minHeap.dequeue().element;
                bricks -= smallest;
                if(bricks<0) return l
            }
           
        }
         l++
            r++
    }
    return heights.length-1
};