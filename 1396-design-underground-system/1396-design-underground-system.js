
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
     	this.customer[id]=[stationName,t];
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const [startStation,startTime] = this.customer[id];
    const key = [startStation, stationName];
    const duration = t-startTime;
    if(!this.avg[key]) this.avg[key] = [duration,1];
    else {
        const[totalTime,count] = this.avg[key];
        this.avg[key]= [totalTime+duration,count+1];
    }

  
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const key = [startStation, endStation];
    const [totalTime,count]=this.avg[key]
    return totalTime /count;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */