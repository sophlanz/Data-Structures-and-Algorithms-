/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
	intervals.sort((a, b) => a[0] - b[0]);
	let minRooms = 0;
	let minHeap = new MinPriorityQueue();
    
for (let i = 0; i < intervals.length; i++) {
        // remove all the meetings that have ended
		const interval = intervals[i];
     while (minHeap.size() > 0 && interval[0] >= minHeap.front().element) {
      minHeap.dequeue().element;
    }
        // add the current meeting into min_heap
    minHeap.enqueue(interval[1]).element;
    // all active meetings are in the min_heap, so we need rooms for all of them.
    minRooms = Math.max(minRooms, minHeap.size());
	}
	return minRooms;
};


