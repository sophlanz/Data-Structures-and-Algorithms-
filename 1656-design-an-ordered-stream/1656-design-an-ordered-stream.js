/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.stream = [];
    this.ptr =0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.stream[idKey-1] = value;
   let res = [];
    while(this.stream[this.ptr]) {
        res.push(this.stream[this.ptr])
        this.ptr++
    }
    return res
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */