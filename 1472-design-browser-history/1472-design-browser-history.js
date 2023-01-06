class Node {
    constructor(val,next,prev) {
        this.val = val;
        this.next=next;
        this.prev=prev
    }
}
/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    let node = new Node(homepage,null,null);
    this.curr = node;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    let node = new Node(url,null,null);
    this.curr.next = node;
    node.prev = this.curr;
    this.curr = node;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while(steps && this.curr.prev) {
        this.curr = this.curr.prev;
        steps--
    }
    return this.curr.val
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while(steps && this.curr.next) {
        this.curr = this.curr.next;
        steps--
    }
    return this.curr.val
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */