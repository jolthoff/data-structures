var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  _.extend(set, setPrototype);
  return set;
};

var setPrototype = {

	add: function(item) {
		this._storage[JSON.stringify(item)] = item;
	},

	contains: function(item) {
		return this._storage[JSON.stringify(item)] ? true : false;
	},

	remove: function(item) {
		delete this._storage[JSON.stringify(item)];
	}

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
