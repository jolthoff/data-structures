var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    var objArray = Object.keys(storage);
    storage[objArray.length] = value;
  };

  someInstance.pop = function(){
    var objArray = Object.keys(storage);
    var result = storage[objArray.length - 1];
    delete storage[objArray.length - 1];
    return result;
  };

  someInstance.size = function(){
    var objArray = Object.keys(storage);
    return objArray.length;
  };

  return someInstance;
};
