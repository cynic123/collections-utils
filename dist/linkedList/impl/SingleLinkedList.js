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
 * A singly linked list implementation of {@link LinkedList} class, with each node having references to only the following node
 */
class SingleLinkedList extends LinkedList_1.default {
  constructor() {
    super();
  }
  get head() {
    return this._head;
  }
  /**
   * method which inserts the given data at the beginning
   * @param data
   */
  insertFirst(data) {
    const currHead = this._head;
    const newNode = new LinkedNode_1.default(data, currHead, 0);
    this._head = newNode;
    if (!currHead) this._tail = newNode;
    let current = this._head.next;
    while (current) {
      current.index++;
      current = current.next;
    }
    this._size++;
  }
  /**
   * method which inserts the given data at the end
   * @param data
   * @param index
   */
  insertLast(data) {
    const currTail = this._tail;
    const newNode = new LinkedNode_1.default(data, null, this.size);
    this._tail = newNode;
    if (!currTail) {
      this._head = newNode;
    } else {
      currTail.next = newNode;
    }
    this._size++;
  }
  /**
   * @param index index at which the given element to be inserted
   * @param data data element to be inserted
   * @throws Invalid index error if the specified index is less than starting index and greater than end index
   */
  insertAt(index, data) {
    if (index < 0 || index > this.size - 1)
      throw (0, console_1.error)("Invalid index!");
    if (index === 0) return this.insertFirst(data);
    else if (index === this._size - 1) return this.insertLast(data);
    else {
      let current = this._head;
      while (current && current.index < index - 1) {
        current = current.next;
      }
      const temp = new LinkedNode_1.default(
        data,
        current.next,
        current.index + 1
      );
      current.next = temp;
      current = current.next.next;
      while (current) {
        current.index = current.index + 1;
        current = current.next;
      }
      this._size++;
    }
  }
  /**
   * @returns the value of the first element after removing it from the list, returns null if the list is empty
   */
  deleteFirst() {
    const head = this._head;
    if (!this.isEmpty()) {
      this._head = head ? head.next : null;
      if (!this._head) {
        // current list is empty after removing head
        this._tail = null;
      }
      this._size--;
    }
    return head ? head.value : null;
  }
  /**
   * @returns the value of the last element after removing it from the list, returns null if the list is empty
   */
  deleteLast() {
    const tail = this._tail;
    if (!this.isEmpty()) {
      let current = this._head;
      let prev = null;
      while (current && current.next) {
        prev = current;
        current = current.next;
      }
      this._tail = prev;
      this._head = this._tail ? this._tail : null; // current list is empty after removing tail
      this._size--;
    }
    return tail ? tail.value : null;
  }
  /**
   * @param data the element to be deleted from the list
   * @returns the value of the provided element after removing it from the list, if the list is empty or element is not
   * present, returns null
   */
  delete(data) {
    // todo
    return null;
  }
  /**
   * @param index the index of the element in the list to delete
   * @returns the value of the element deleted at the specified index. If index not in range, or element is
   */
  deleteAt(index) {
    if (index < 0 || index > this._size - 1)
      throw (0, console_1.error)("Invalid index!");
    let current = this._head;
    let prev = null;
    while (current && current.index < index) {
      prev = current;
      current = current.next;
    }
    // todo
    return null;
  }
  /**
   * reverses the list on which the method is called upon
   */
  reverse() {
    let prev = null;
    let current = this._head;
    this._tail = current;
    while (current) {
      const next = current.next;
      current.next = prev;
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
   * @returns returns a new instance of {@link SingleLinkedList} class containing the nodes from the start index to the end
   * index (both inclusive) of the original list
   */
  subList(start, end) {
    var _a;
    if (start < 0 || end >= this._size || start > end) {
      throw (0, console_1.error)("Invalid range indices!");
    }
    if (start === end) {
      return SingleLinkedList.create(
        (_a = this.nodeAt(start)) === null || _a === void 0 ? void 0 : _a.value
      );
    }
    let current = this._head;
    while (current && current.index < start) {
      current = current.next;
    }
    const list = new SingleLinkedList();
    while (current && current.index <= end) {
      list.insertLast(current.value);
      current = current.next;
    }
    return list;
  }
  /**
   * @param  {...any} args variable number of elements to be added to the list
   * @returns an instance of the {@link SingleLinkedList} class, having nodes of {@link LinkedNode} instances added in a
   * sequential order
   */
  static create(...args) {
    const list = new SingleLinkedList();
    args
      .slice(0)
      .reverse()
      .forEach((val) => {
        list.insertFirst(val);
      });
    return list;
  }
}
exports.default = SingleLinkedList;
