/* SinglyLinkedList!!
* A linked list is implar to an array, it hold values.
* However, links in a linked list do not have indexes. With
* a linked list you do not need to predetermine it's size as
* it grows and shrinks as it is edited. This is an example of
* a singly linked list.
*/

// Functions - add, remove, indexOf, elementAt, addAt, removeAt, view

// class LinkedList and constructor
// Creates a LinkedList
const LinkedList = (function () {
  function LinkedList () {
    // Length of linklist and head is null at start
    this.length = 0
    this.head = null
  }

  // class node (constructor)
  // Creating Node with element's value
  const Node = (function () {
    function Node (element) {
      this.element = element
      this.next = null
    }
    return Node
  }())

  // Returns length
  LinkedList.prototype.size = function () {
    return this.length
  }

  // Returns the head
  LinkedList.prototype.head = function () {
    return this.head
  }

  // Creates a node and adds it to linklist
  LinkedList.prototype.add = function (element) {
    const node = new Node(element)
    // Check if its the first element
    if (this.head === null) {
      this.head = node
    } else {
      let currentNode = this.head

      // Loop till there is node present in the list
      while (currentNode.next) {
        currentNode = currentNode.next
      }

      // Adding node to the end of the list
      currentNode.next = node
    }
    // Increment the length
    this.length++
  }

  // Removes the node with the value as param
  LinkedList.prototype.remove = function (element) {
    let currentNode = this.head
    let previousNode

    // Check if the head node is the element to remove
    if (currentNode.element === element) {
      this.head = currentNode.next
    } else {
      // Check which node is the node to remove
      while (currentNode.element !== element) {
        previousNode = currentNode
        currentNode = currentNode.next
      }

      // Removing the currentNode
      previousNode.next = currentNode.next
    }

    // Decrementing the length
    this.length--
  }

  // Return if the list is empty
  LinkedList.prototype.isEmpty = function () {
    return this.length === 0
  }

  // Returns the index of the element passed as param otherwise -1
  LinkedList.prototype.indexOf = function (element) {
    let currentNode = this.head
    let index = -1

    while (currentNode) {
      index++

      // Checking if the node is the element we are searching for
      if (currentNode.element === element) {
        return index + 1
      }
      currentNode = currentNode.next
    }

    return -1
  }

  // Returns the element at an index
  LinkedList.prototype.elementAt = function (index) {
    let currentNode = this.head
    let count = 0
    while (count < index) {
      count++
      currentNode = currentNode.next
    }
    return currentNode.element
  }

  // Adds the element at specified index
  LinkedList.prototype.addAt = function (index, element) {
    index--
    const node = new Node(element)

    let currentNode = this.head
    let previousNode
    let currentIndex = 0

    // Check if index is out of bounds of list
    if (index > this.length) {
      return false
    }

    // Check if index is the start of list
    if (index === 0) {
      node.next = currentNode
      this.head = node
    } else {
      while (currentIndex < index) {
        currentIndex++
        previousNode = currentNode
        currentNode = currentNode.next
      }

      // Adding the node at specified index
      node.next = currentNode
      previousNode.next = node
    }

    // Incrementing the length
    this.length++
    return true
  }

  // Removes the node at specified index
  LinkedList.prototype.removeAt = function (index) {
    index--
    let currentNode = this.head
    let previousNode
    let currentIndex = 0

    // Check if index is present in list
    if (index < 0 || index >= this.length) {
      return null
    }

    // Check if element is the first element
    if (index === 0) {
      this.head = currentNode.next
    } else {
      while (currentIndex < index) {
        currentIndex++
        previousNode = currentNode
        currentNode = currentNode.next
      }
      previousNode.next = currentNode.next
    }

    // Decrementing the length
    this.length--
    return currentNode.element
  }

  // Function to view the LinkedList
  LinkedList.prototype.view = function (output = value => console.log(value)) {
    let currentNode = this.head
    let count = 0
    while (count < this.length) {
      count++
      output(currentNode.element)
      currentNode = currentNode.next
    }
  }

  // returns the constructor
  return LinkedList
}())

export { LinkedList }
