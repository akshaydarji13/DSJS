// Given an array of integers, find if the array contains any duplicates.
// The function should return true if any value appears at least twice in the array else return false.

const containsDuplicate = function(nums) {
  let hashTable = new HashSet();
  for (let i = 0; i < nums.length; i++) {
    let hashInsertion = hashTable.add(nums[i])
    if (!hashInsertion) {
      return true;
    }
  }
  return false;
};

class HashSet {
  constructor() {
    this.hashtable = [];
    this.space = 1000;
    for (let i = 0; i < this.space; i++) {
      this.hashtable[i] = new Bucket();
    }
  }
}

HashSet.prototype.hash = function(key) {
  return Math.abs(key) % this.space;
}

HashSet.prototype.add = function(key) {
  const bucketIndex = this.hash(key);
  return this.hashtable[bucketIndex].insert(key);
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Bucket {
  constructor() {
    this.head = null;
  }
}

Bucket.prototype.insert = function(value) {
  if (this.exists(value)) {
    return false;
  }
  let newNode = new Node(value, this.head);
  this.head = newNode;
  return true;
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

console.log(containsDuplicate([1, 5, -2, -4, 0]));