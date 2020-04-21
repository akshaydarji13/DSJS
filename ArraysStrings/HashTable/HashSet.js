/**
 * Initialize your data structure here.
 */
class HashSet {
  constructor() {
    this.storage = [];
    this.max = 1000;
    for (let i = 0; i < this.max; i++) {
      this.storage[i] = new Bucket();
    }
  }
}

HashSet.prototype.hash = function(key) {
  return key % this.max;
};

/** 
* @param {number} key
* @return {void}
*/
HashSet.prototype.add = function(key) {
  const bucketIndex = this.hash(key);
  this.storage[bucketIndex].insert(key);
};

/** 
* @param {number} key
* @return {void}
*/
HashSet.prototype.remove = function(key) {
  const bucketIndex = this.hash(key);
  this.storage[bucketIndex].delete(key);
};

/**
* Returns true if this set contains the specified element 
* @param {number} key
* @return {boolean}
*/
HashSet.prototype.contains = function(key) {
  const bucketIndex = this.hash(key);
  return this.storage[bucketIndex].exists(key);
};

class Node {
  constructor(value, next = null) {
    this.data = value;
    this.next = next;
  }
}

class Bucket {
  constructor() {
    this.head = null;
  }
}

// If the value do not exist then add the new element to the head
Bucket.prototype.insert = function(value) {
  if(!this.exists(value)) {
    let newNode = new Node(value, this.head);
    this.head = newNode;
  }
}

Bucket.prototype.delete = function(value) {
  if (!this.head) {
    return;
  }
  
  if(this.head.data === value) {
    this.head = this.head.next;
    return;
  }

  let previousNode = this.head;
  let currentNode = this.head.next;
  while (currentNode !== null) {
    if (currentNode.data === value ) {
      previousNode.next = currentNode.next;
      return;
    }
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
}

Bucket.prototype.exists = function(value) {
  currentNode = this.head;
  while (currentNode !== null) {
    if (currentNode.data === value) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
}

module.exports = HashSet;