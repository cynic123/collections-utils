"use strict";
/**
 * @author Prithwish Samanta
 */
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
/**
 * an abstract class defining a linked list data structure and its common operations
 */
class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }
  get head() {
    return this._head;
  }
  get size() {
    return this._size;
  }
  isEmpty() {
    return this._size === 0;
  }
  /**
   *
   * @returns the value of the head element of the list if present, otherwise undefined
   */
  getFirst() {
    var _a;
    return (_a = this._head) === null || _a === void 0 ? void 0 : _a.value;
  }
  /**
   *
   * @returns the value of the tail element of the list if present, otherwise undefined
   */
  getLast() {
    var _a;
    return (_a = this._tail) === null || _a === void 0 ? void 0 : _a.value;
  }
  /**
   * prints the list
   */
  print() {
    let s = "";
    let temp = this._head;
    while (temp) {
      s = s.concat(temp.value, " -> ");
      temp = temp.next;
    }
    s = s.length > 0 ? s.concat("null") : "empty";
    return s;
  }
  /**
   *
   * @returns middle node of the list
   */
  middleNode() {
    let slow = this._head;
    let fast = this._head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  /**
   *
   * @returns element at the middle of the list, or undefined if the list is empty
   */
  middle() {
    var _a;
    return (_a = this.middleNode()) === null || _a === void 0
      ? void 0
      : _a.value;
  }
  /**
   *
   * @param index
   * @returns node at the specified index
   */
  nodeAt(index) {
    if (index < 0 || index >= this._size) {
      throw (0, console_1.error)("Invalid index!");
    }
    let current = this._head;
    while (current && current.index !== index) {
      current = current.next;
    }
    return current;
  }
  /**
   *
   * @returns returns a new array containing the elements of linked list in their original order
   */
  toArray() {
    let current = this._head;
    const arr = [];
    while (current) {
      arr[current.index] = current.value;
      current = current.next;
    }
    return arr;
  }
  /**
   *
   * @param other other list to compare to
   * @returns if the referred to list and the other list passed as argument as same in size and values
   */
  equals(other) {
    let head1 = this._head;
    let head2 = other.head;
    while (head1 && head2) {
      if (head1.value !== head2.value) {
        return false;
      }
      head1 = head1.next;
      head2 = head2.next;
    }
    if (!head1 && !head2) return true;
    else return false;
  }
  /**
   *
   * @returns true if the list is a palindrome, else false
   */
  palindrome() {
    if (!this._head || !this._head.next) {
      return true;
    }
    const mid = Math.floor(this.size / 2);
    const odd = this.size % 2 !== 0;
    const lList = this.subList(0, odd ? mid : mid - 1);
    const rList = this.subList(mid, this.size - 1);
    rList.reverse();
    return lList.equals(rList);
  }
}
exports.default = LinkedList;
