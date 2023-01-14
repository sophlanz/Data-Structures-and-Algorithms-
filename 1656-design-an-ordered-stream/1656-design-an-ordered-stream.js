/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.ptr = 0;
    this.stream=[];
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.stream[idKey-1] = value;
    let result = [];
    while(this.stream[this.ptr]) {
        result.push(this.stream[this.ptr])
        this.ptr++
    }
    return result;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */