"use strict";
/**
 * @author Prithwish Samanta
 */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const LinkedList_1 = __importDefault(require("../abstract/LinkedList"));
const LinkedNode_1 = __importDefault(require("../../node/LinkedNode"));
/**
 * A doubly linked list implementation of LinkedList class, with each node having references to both preceding and following
 * nodes
 */
class DoubleLinkedList extends LinkedList_1.default {
  constructor() {
    super();
  }
  /**
   * method which inserts the given data at the beginning
   * @param data
   */
  insertFirst(data, index) {
    const currHead = this._head;
    const newNode = new LinkedNode_1.default(data, currHead, index);
    this._head = newNode;
    if (!currHead) this._tail = newNode;
    else currHead.prev = newNode;
    this._size++;
  }
  /**
   * method which inserts the given data at the end
   * @param data
   * @param index
   */
  insertLast(data, index) {
    const currTail = this._tail;
    const newNode = new LinkedNode_1.default(data, null, index, currTail);
    this._tail = newNode;
    if (!currTail) {
      this._head = newNode;
    } else {
      currTail.next = newNode;
    }
    this._size++;
  }
  /**
   *
   * @param data data element to be inserted
   * @param index index at which the given element to be inserted
   */
  insertAt(data, index) {
    if (index < 0 || index >= this._size)
      throw (0, console_1.error)("Invalid index!");
    let current = this._head;
    let currIndex = 0;
    while (current && currIndex < index) {
      current = current.next;
      currIndex++;
    }
    const prev = current.prev;
    const temp = new LinkedNode_1.default(data, current, currIndex, prev);
    prev.next = temp;
    current = current.next;
    while (current) {
      current.index = current.index + 1;
      current = current.next;
    }
  }
  /**
   * reverses the list
   */
  reverse() {
    let prev = null;
    let current = this._head;
    this._tail = current;
    while (current) {
      const next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current.index = this._size - current.index - 1;
      current = next;
    }
    this._head = prev;
  }
  /**
   *
   * @param start
   * @param end
   * @returns returns a new list containing the nodes from the start index to the end index (both inclusive) of the original list
   */
  subList(start, end) {
    var _a;
    if (start < 0 || end >= this._size || start > end) {
      throw (0, console_1.error)("Invalid range indices!");
    }
    if (start === end) {
      return DoubleLinkedList.create(
        (_a = this.nodeAt(start)) === null || _a === void 0 ? void 0 : _a.value
      );
    }
    let current = this._head;
    while (current && current.index < start) {
      current = current.next;
    }
    const list = new DoubleLinkedList();
    let count = 0;
    while (current && current.index <= end) {
      list.insertLast(current.value, count++);
      current = current.next;
    }
    return list;
  }
  /**
   *
   * @param  {...any} args variable number of elements to be added to the list
   * @returns an instance of the DoubleLinkedList class, with arguments passed being represented as nodes in a sequential order
   */
  static create(...args) {
    const list = new DoubleLinkedList();
    let count = args ? args.length - 1 : 0;
    args
      .slice(0)
      .reverse()
      .forEach((val) => {
        list.insertFirst(val, count--);
      });
    return list;
  }
}
exports.default = DoubleLinkedList;
