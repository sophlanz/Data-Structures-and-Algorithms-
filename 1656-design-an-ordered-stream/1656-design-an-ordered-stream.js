/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.pointer = 0;
    this.stream = [];
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.stream[idKey-1]=value
    let res=[];
    while(this.stream[this.pointer]) {
        res.push(this.stream[this.pointer])
        this.pointer++
    }
    return res;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */