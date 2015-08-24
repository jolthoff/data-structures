var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.length = 0;
  return newStack;

};

var stackMethods = {
	push: function(value) {
		this.storage[this.length] = value;
		this.length++;
	},
	pop: function() {
		var result = this.storage[this.length - 1];
		delete this.storage[this.length - 1];
		if (this.length !== 0) {
			this.length--;
		}
		return result;
	},
	size: function() {
		return this.length;
	}
};


