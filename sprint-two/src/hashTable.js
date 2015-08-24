var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket === undefined) {
  	this._storage.set(i, []);
  	bucket = this._storage.get(i);
  } else {
  	_.each(bucket, function(tuple) {
  		if (tuple[0] === k) {
  			tuple[1] = v;
  		}
  	})
  }
  bucket.push([k, v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var found;
  _.each(bucket, function(tuple) {
  	if (tuple[0] === k)
  		found = tuple[1];
  })
  return found;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  _.each(bucket, function(tuple, index) {
  	if (tuple[0] === k) {
  		tuple[1] = null;
  	}
  })

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
