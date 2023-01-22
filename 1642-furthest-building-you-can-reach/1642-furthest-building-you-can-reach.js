/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
   
let minHeap =  new MinPriorityQueue();
    for(let i=0;i<heights.length-1;i++) {
        console.log()
        const diff = heights[i+1]-heights[i]
        if(diff <=0) continue;
        minHeap.enqueue(diff).element;
        
        if(minHeap.size() > ladders) {
            
            let num = minHeap.dequeue().element;
            console.log(num)
            bricks -= num;
            console.log(bricks)
            if(bricks <0) return i;
            
        }
    }
    return heights.length-1
};