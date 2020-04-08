// Initialize LinkedList Data Structure
class LinkedList {
  constructor() {
    this.head = null;
  }
}

// Initialize Node Data Structure for LinkedList Data Structure
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Get the {data} of index-th node in linked list. If the index is invalid, return null
LinkedList.prototype.get = function(index) {
  if (index < 0) {
    return null;
  }
  let currentNode = this.head;
  let i = 0;
  while(currentNode && i < index) {
    currentNode = currentNode.next;
    i++;
  }
  return currentNode ? currentNode.data : null;
};

// Get the node at index in LinkedList. If the index is invalid, return null
LinkedList.prototype.getNode = function(index) {
  if (index < 0) {
    return null;
  }
  let currentNode = this.head;
  let i = 0;
  while(currentNode && i < index) {
    currentNode = currentNode.next;
    i++;
  }
  return currentNode ? currentNode : null;
}

// Add a node at the head of the LinkedList
LinkedList.prototype.addAtHead = function(value) {
  let newNode = new Node(value, this.head);
  this.head = newNode;
};

// Append a node to the last element of the LinkedList
LinkedList.prototype.addAtTail = function(value) {
  let newNode = new Node(value);
  if(!this.head) {
    this.head = newNode;
    return newNode;
  }
  let tail = this.head;
  while(tail.next !== null) {
    tail = tail.next;
  }
  tail.next = newNode;
};

// Add a node before the index-th node in the LinkedList. If index is greater than the length, the node will not be inserted
LinkedList.prototype.addAtIndex = function(index, value) {
  if (index === 0) {
    this.addAtHead(value);
    return;
  }
  let previous = this.getNode(index - 1);
  if (previous) {
    let newNode = new Node(value);
    newNode.next = previous.next;
    previous.next = newNode;
  }
};

// Delete the index-th node in the LinkedList of the index is valid.
LinkedList.prototype.deleteAtIndex = function(index) {
  if (!this.head) {
    return;
  }

  if (index === 0) {
    this.head = this.head.next;
    return;
  }

  let previous = this.getNode(index - 1);
  if (!previous || !previous.next) {
    return;
  }
  previous.next = previous.next.next;
};

module.exports = LinkedList;
