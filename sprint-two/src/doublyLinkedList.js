var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    // If the list is empty
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      var oldTail = list.tail;
      list.tail.next = newNode;
      list.tail = newNode;
      list.tail.prev = oldTail;
    }
  };

  list.removeHead = function() {
    if (list.head === null) {
      return undefined;
    }
    var result = list.head.value;
    if (list.head.next === null) {
      list.tail = null;
    }
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  };

  list.removeTail = function() {
    if (list.tail === null) {
      return undefined;
    }
    var result = list.tail.value;
    if (list.tail.prev === null) {
      list.tail = null;
    }
    list.tail = list.tail.prev;
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.prev = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

    addToTail: constant O(1)
    removeHead: constant O(1)
    contains: linear O(n)


 */
