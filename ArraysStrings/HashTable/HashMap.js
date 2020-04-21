// All keys and values will be in the range of [0, 1000000].
// The number of operations will be in the range of [1, 10000].
// Implement the hashmap with modulo + array in JS if the key is in int form

class HashMap {
  constructor() {
    this.space = 2069;
    this.hashTable = [];
    for (let i = 0; i < this.space; i++) {
      this.hashTable[i] = new Bucket();
    }
  }
}

HashMap.prototype.put = function(key, value) {
  let hashKey = key % this.space;
  this.hashTable[hashKey].update(key, value);
}

HashMap.prototype.get = function(key) {
  let hashKey = key % this.space;
  return this.hashTable[hashKey].get(key);
}

HashMap.prototype.remove = function(key) {
  let hashKey = key % this.space;
  this.hashTable[hashKey].remove(key);
}

class Bucket {
  constructor() {
    this.bucket = [];
  }
}

Bucket.prototype.get = function(key) {
  for (let i = 0; i < this.bucket.length; i++) {
    if (this.bucket[i][0] == key) {
      return this.bucket[i][1];
    }
  }
  return -1;
};

Bucket.prototype.update = function(key, value) {
  for (let i = 0; i < this.bucket.length; i++) {
    if (key === this.bucket[i][0]) {
      this.bucket[i] = [key, value];
      return;
    }
  }
  this.bucket.push([key, value]);
  return;
};

Bucket.prototype.remove = function(key) {
  for (let i = 0; i < this.bucket.length; i++) {
    if (key === this.bucket[i][0]) {
      this.bucket.splice(i, 1);
    }
  }
};
