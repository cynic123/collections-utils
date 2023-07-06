"use strict";
/**
 * @author Prithwish Samanta
 */
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
/**
 * an abstract class defining a linked list data structure and common operations performed on it
 */
var LinkedList = /** @class */ (function () {
  function LinkedList() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }
  Object.defineProperty(LinkedList.prototype, "head", {
    get: function () {
      return this._head;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(LinkedList.prototype, "tail", {
    get: function () {
      return this._tail;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(LinkedList.prototype, "size", {
    get: function () {
      return this._size;
    },
    enumerable: false,
    configurable: true,
  });
  /**
   * inserts the given element to the end of the linked list
   * @param data
   */
  LinkedList.prototype.add = function (data) {
    this.insert(data);
  };
  /**
   * deletes the given element from the collection
   * @param data element to be deleted from the list
   * @returns the value of the element deleted
   */
  LinkedList.prototype.remove = function (data) {
    return this.delete(data);
  };
  /**
   * @returns true if the list is epmty, else false
   */
  LinkedList.prototype.isEmpty = function () {
    return !this._head && !this._tail && this._size === 0;
  };
  /**
   * removes all elements from the list
   */
  LinkedList.prototype.clear = function () {
    this._head = null;
    this._tail = null;
    this._size = 0;
  };
  /**
   *
   * @returns the value of the head element of the list if present, otherwise undefined
   */
  LinkedList.prototype.getFirst = function () {
    var _a;
    return this._head
      ? (_a = this.head) === null || _a === void 0
        ? void 0
        : _a.value
      : null;
  };
  /**
   *
   * @returns the value of the tail element of the list if present, otherwise undefined
   */
  LinkedList.prototype.getLast = function () {
    return this._tail ? this._tail.value : null;
  };
  /**
   * prints the list
   */
  LinkedList.prototype.print = function () {
    var s = "";
    var temp = this._head;
    while (temp) {
      s = s.concat(temp.value, " -> ");
      temp = temp.next;
    }
    s = s.length > 0 ? s.concat("null") : "empty";
    return s;
  };
  /**
   *
   * @returns middle node of the list
   */
  LinkedList.prototype.middleNode = function () {
    var slow = this._head;
    var fast = this._head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  };
  /**
   *
   * @returns element at the middle of the list, or undefined if the list is empty
   */
  LinkedList.prototype.middle = function () {
    var _a;
    return (_a = this.middleNode()) === null || _a === void 0
      ? void 0
      : _a.value;
  };
  /**
   *
   * @param index
   * @returns node at the specified index
   */
  LinkedList.prototype.nodeAt = function (index) {
    if (index < 0 || index >= this._size) {
      throw (0, console_1.error)("Invalid index!");
    }
    var current = this._head;
    while (current && current.index !== index) {
      current = current.next;
    }
    return current;
  };
  /**
   *
   * @returns returns a new array containing the elements of the linked list in their original order, returns null if the
   * list is empty
   */
  LinkedList.prototype.toArray = function () {
    var current = this._head;
    var arr = [];
    while (current) {
      arr[current.index] = current.value;
      current = current.next;
    }
    return arr;
  };
  /**
   *
   * @param other other list (an instance of {@link LinkedList}) to compare to
   * @returns if the referred to list and the other list passed as argument as same in size and values
   */
  LinkedList.prototype.equals = function (other) {
    var head1 = this._head;
    var head2 = other.head;
    while (head1 && head2) {
      if (head1.value !== head2.value) {
        return false;
      }
      head1 = head1.next;
      head2 = head2.next;
    }
    if (!head1 && !head2) return true;
    else return false;
  };
  /**
   *
   * @returns true if the list is a palindrome, else false
   */
  LinkedList.prototype.palindrome = function () {
    if (!this._head || !this._head.next) {
      return true;
    }
    var mid = Math.floor(this.size / 2);
    var odd = this.size % 2 !== 0;
    var lList = this.subList(0, odd ? mid : mid - 1);
    var rList = this.subList(mid, this.size - 1);
    rList.reverse();
    return lList.equals(rList);
  };
  return LinkedList;
})();
exports.default = LinkedList;
