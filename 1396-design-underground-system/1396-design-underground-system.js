
var UndergroundSystem = function() {
      this.customer = new Map();
        this.avg = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
     	this.customer[id] = [stationName, t];
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    	const [startStation, time] = this.customer[id];
		const key = `${startStation}, ${stationName}`;
		const duration = t - time; // duration stayed

    // if route(key) not visited, save average
    // else add to total time and increment count by 1
		if (!this.avg[key]) this.avg[key] = [duration, 1];
		else {
			const [total, count] = this.avg[key];

			this.avg[key] = [total + duration, count + 1];
		}
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const key = `${startStation}, ${endStation}`;
		const [total, count] = this.avg[key];

		return total / count;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */