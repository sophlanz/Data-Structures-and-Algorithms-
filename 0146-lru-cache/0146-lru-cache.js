/**
 * @param {number} capacity
 */
//MRU head, LRU tail
class Node {
    constructor(key,val,prev){
        this.val=val;
        this.key=key;
        this.prev=this.next=null;
    }
}
var DoublyLinkedList = function(){
    this.tail = new Node();
    this.head = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
}
DoublyLinkedList.prototype.insertHead = function(node){
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
}
DoublyLinkedList.prototype.removeNode = function(node){
    let next = node.next;
    let prev = node.prev;
    next.prev = prev;
    prev.next = next;
}
DoublyLinkedList.prototype.moveToHead = function(node){
   this.removeNode(node);
    this.insertHead(node);
}
DoublyLinkedList.prototype.removeTail = function(){
    let tail = this.tail.prev;
    this.removeNode(tail);
    return tail.key
}
var LRUCache = function(capacity) {
    this.cache = new Map();
    this.dll = new DoublyLinkedList();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
if(!this.cache.has(key))return -1
    let node = this.cache.get(key);
    this.dll.moveToHead(node);
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(!this.cache.has(key)){
        let node = new Node(key,value);
        this.dll.insertHead(node);
        this.cache.set(key,node)
        if(this.cache.size > this.capacity){
            const LRU = this.dll.removeTail();
            this.cache.delete(LRU);
        }
    }else{
        let node = this.cache.get(key);
        node.val = value;
        this.cache.set(key,node)
        this.dll.moveToHead(node);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */