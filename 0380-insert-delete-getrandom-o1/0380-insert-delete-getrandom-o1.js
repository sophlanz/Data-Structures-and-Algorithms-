
var RandomizedSet = function() {
    this.map = new Map();
    this.set=[];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)) return false;
    this.map.set(val, this.set.length);
    this.set.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.map.has(val)) return false;
    const index = this.map.get(val);
    if(index !== this.set.length-1) {
        [this.set[index], this.set[this.set.length-1]] = [this.set[this.set.length-1], this.set[index]];
    }
    this.set.pop();
    this.map.delete(val);
    this.map.set(this.set[index], index);
    return true;
    
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.set[Math.floor(Math.random()*this.set.length)]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */