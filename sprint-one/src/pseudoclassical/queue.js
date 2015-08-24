var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.length] = value;
	this.length++;
}

Queue.prototype.dequeue = function() {
	var result = this.storage['0'], storage = this.storage;
	delete this.storage['0'];
	_.each(this.storage, function(value, key) {
		key = key - 1;
		storage[key] = value
	})
	delete this.storage[this.length - 1]
	if (this.length !== 0) {
		this.length--;
	}
	return result;
}

Queue.prototype.size = function() {
	return this.length;
}

var queue = new Queue();