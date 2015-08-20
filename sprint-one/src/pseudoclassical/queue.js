var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
	this.storage[Object.keys(this.storage).length] = value;
}

Queue.prototype.dequeue = function() {
	var result = this.storage['0'], storage = this.storage;
	delete this.storage['0'];
	_.each(this.storage, function(value, key) {
		key = key - 1;
		storage[key] = value
	})
	delete this.storage[Object.keys(this.storage).length - 1]
	return result;
}

Queue.prototype.size = function() {
	return Object.keys(this.storage).length;
}

var queue = new Queue();