var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.length = 0;
  return newQueue;
};

var queueMethods = {
	enqueue:  function(value){
	    this.storage[this.length] = value;
	    this.length++;
  	},
  	dequeue: function(){
	    var result = this.storage['0'], storage = this.storage;
	    delete this.storage['0'];
	    _.each(this.storage, function(value, key) {
	      key = key - 1;
	      storage[key] = value;
	    })
	    delete this.storage[this.length];
	    if (this.length !== 0) {
	    	this.length--;
	    }
	    return result;
  	},
  	size: function(){
  		return this.length;
	}
};


