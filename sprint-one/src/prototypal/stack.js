var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  return newStack;

};

var stackMethods = {
	push: function(value) {
		var objArray = Object.keys(this.storage);
		this.storage[objArray.length] = value;
	},
	pop: function() {
		var objArray = Object.keys(this.storage);
		var result = this.storage[objArray.length - 1];
		delete this.storage[objArray.length - 1];
		return result;
	},
	size: function() {
		return Object.keys(this.storage).length;
	}
};


