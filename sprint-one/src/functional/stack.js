var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.length = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[storage.length] = value;
    storage.length += 1;
  };

  someInstance.pop = function(){
    var result = storage[storage.length - 1];
    delete storage[storage.length - 1];
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
