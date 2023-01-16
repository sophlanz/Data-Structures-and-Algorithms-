
var RandomizedSet = function() {
    this.set = [];
    this.idxMap=new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.idxMap.has(val)) return false
    this.idxMap.set(val,this.set.length);
    this.set.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.idxMap.has(val)) return false
    const idx = this.idxMap.get(val);
    [this.set[idx], this.set[this.set.length-1]] = [this.set[this.set.length-1], this.set[idx]];
    this.set.pop();
    this.idxMap.delete(val);
    this.idxMap.set(this.set[idx], idx)
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.set[Math.floor(Math.random() * this.set.length)]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */