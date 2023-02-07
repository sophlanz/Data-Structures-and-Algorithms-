/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
   intervals.sort((a,b)=> a[0]-b[0]);
    let minHeap = new MinPriorityQueue();
    let minRooms = 0
    for(let i=0;i<intervals.length;i++) {
        const interval = intervals[i]
        if(minHeap.size() !==0 && minHeap.front().element <=interval[0] ) {
            minHeap.dequeue().element;
        }
        minHeap.enqueue(interval[1]).element
        minRooms = Math.max(minRooms,minHeap.size());
    }
    return minRooms
    
};