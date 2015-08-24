var Queue = function(){
  var someInstance = {};
  
  // Use an object with numeric keys to store values
  var storage = {};

  storage.length = 0;

  // Implement the methods below
  someInstance.enqueue =  function(value){
    storage[storage.length] = value;
    storage.length += 1;
  };

  someInstance.dequeue = function(){
    var result = storage['0'];
    delete storage['0'];
    _.each(storage, function(value, key) {
      key = Number(key) - 1;
      storage[key] = value;
    }) 
    delete storage[storage.length]
    if (storage.length !== 0) {
      storage.length -= 1;
    }
    return result;
  };

  someInstance.size = function(){
    return storage.length;
  };

  return someInstance;

};
