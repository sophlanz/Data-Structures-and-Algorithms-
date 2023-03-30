
var RandomizedSet = function() {
   this.map = new Map();
    this.set = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val))return false
    this.map.set(val,this.set.length);
    this.set.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.map.has(val)) return false
    const idx = this.map.get(val);
    if(idx !== this.set.length-1) {
        [this.set[idx], this.set[this.set.length-1]] = [this.set[this.set.length-1],this.set[idx]]
    }
    this.set.pop();
    this.map.set(this.set[idx], idx);
    this.map.delete(val);
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