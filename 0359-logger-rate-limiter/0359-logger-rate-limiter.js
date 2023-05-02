
var Logger = function() {
    this.logger = new Map();
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if(this.logger.has(message)) {
        if(timestamp >= this.logger.get(message)){
            this.logger.set(message,timestamp+10)
            return true
        }else {
            return false
             }
    }else{
         this.logger.set(message,timestamp+10);
        return true;
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */