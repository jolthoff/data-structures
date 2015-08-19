var Queue = function(){
  var someInstance = {};
  
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue =  function(value){
    var objArray = Object.keys(storage);
    storage[objArray.length] = value;
  };

  someInstance.dequeue = function(){
    var result = storage['0'];
    delete storage['0'];
    var objArray = Object.keys(storage);
    _.each(storage, function(value, key) {
      key = key - 1;
      storage[key] = value;
    })
    delete storage[objArray.length]
    return result;
  };

  someInstance.size = function(){
    var objArray = Object.keys(storage);
    return objArray.length;
  };

  return someInstance;

};
