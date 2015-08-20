var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {
	enqueue:  function(value){
	    var objArray = Object.keys(this.storage);
	    this.storage[objArray.length] = value;
  	},
  	dequeue: function(){
	    var result = this.storage['0'], storage = this.storage;
	    delete this.storage['0'];
	    var objArray = Object.keys(this.storage);
	    _.each(this.storage, function(value, key) {
	      key = key - 1;
	      storage[key] = value;
	    })
	    delete this.storage[objArray.length];
	    return result;
  	},
  	size: function(){
	    var objArray = Object.keys(this.storage);
	    return objArray.length;
	}
};


