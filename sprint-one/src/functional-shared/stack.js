var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
  	storage: {}
  };

  _.extend(someInstance, stackMethods)

  return someInstance;
};

var stackMethods = {

	push: function(value){
	    var objArray = Object.keys(this.storage);
	    this.storage[objArray.length] = value;
  	},

  	pop: function(){
	    var objArray = Object.keys(this.storage);
	    var result = this.storage[objArray.length - 1];
	    delete this.storage[objArray.length - 1];
	    return result;
  	},

  	size: function(){
	    var objArray = Object.keys(this.storage);
	    return objArray.length;
  	}
};


