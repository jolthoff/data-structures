var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      var oldTail = list.tail;
      list.tail = Node(value);
      oldTail.next = list.tail;
      list.tail.previous = oldTail;
    }
  };

  list.removeHead = function(){
    var oldHead = list.head;
    if (oldHead.next !== null) {
      list.head = oldHead.next;
      list.head.previous = null
    }
    return oldHead.value;
  };

  list.contains = function(target){
    var node = list.head;
    while (node !== null) {
      if (node.value === target) {
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
