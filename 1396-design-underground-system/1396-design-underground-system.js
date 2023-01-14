
var UndergroundSystem = function() {
    this.avg={};
    this.customer={};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.customer[id] = [stationName,t];
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const [startStation,startTime] = this.customer[id];
    const duration = t-startTime;
    const route = [startStation, stationName];
    if(!this.avg[route]) {
        this.avg[route] = [duration, 1];
    }else {
        const [totalTime, count] = this.avg[route];
        this.avg[route] = [totalTime+duration,count+1]
    };
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const route = [startStation,endStation];
    const [totalTime, count] = this.avg[route];
    return totalTime/count;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */