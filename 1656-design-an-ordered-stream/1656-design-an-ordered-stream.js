/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.list = [];
    this.pointer = 1;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.list[idKey] = value
    let res=[];
    while(this.list[this.pointer]){
        res.push(this.list[this.pointer])
        this.pointer++
    }
    return res
        
        
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */