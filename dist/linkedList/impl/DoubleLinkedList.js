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
const ListNode_1 = __importDefault(require("../../node/ListNode"));
/**
 * A doubly linked list implementation of {@link LinkedList} class, where each node are an instance of the {@link ListNode}
 * class, containing references to both the preceding and the following nodes in the list
 */
class DoubleLinkedList extends LinkedList_1.default {
  constructor() {
    super();
  }
  /**
   * inserts the given element at the beginning of the list
   * @param data
   */
  insertFirst(data) {
    const currHead = this._head;
    const newNode = new ListNode_1.default(data, currHead, 0);
    this._head = newNode;
    if (!currHead) this._tail = newNode;
    else currHead.prev = newNode;
    let current = this._head.next;
    while (current) {
      current.index++;
      current = current.next;
    }
    this._size++;
  }
  /**
   * inserts the given element at the end of the list
   * @param data
   * @param index
   */
  insertLast(data) {
    const currTail = this._tail;
    const newNode = new ListNode_1.default(data, null, this.size, currTail);
    this._tail = newNode;
    if (!currTail) {
      this._head = newNode;
    } else {
      currTail.next = newNode;
    }
    this._size++;
  }
  /**
   * inserts the given element at the provided index of the list
   * @param index index at which the given element to be inserted
   * @param data data element to be inserted
   * @throws ListIndexOutOfBoundsError if the specified index is less than starting index and greater than end index
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
      const temp = new ListNode_1.default(
        data,
        current.next,
        current.index + 1,
        current
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
   * inserts the given element at the end of the list
   * @param data data element to be inserted
   */
  insert(data) {
    this.insertLast(data);
  }
  /**
   * @returns the value of the first element after removing it from the list, returns null if the list is empty
   */
  deleteFirst() {
    const head = this._head;
    if (!this.isEmpty()) {
      this._head = this._head ? this._head.next : null;
      if (this._head) {
        this._head.prev = null;
      } else {
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
      this._tail = this._tail ? this._tail.prev : null;
      if (this._tail) {
        this._tail.next = null;
      } else {
        // current list is empty after removing tail
        this._head = null;
      }
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
    let current = this._head;
    while (current) {
      if (current.value === data) {
        if (current.index === 0) return this.deleteFirst();
        else if (current.index === this.size - 1) return this.deleteLast();
        else {
          current.prev.next = current.next;
          current.next = null;
          current.prev = null;
          return current.value;
        }
      }
      current = current.next;
    }
    return null;
  }
  /**
   * @param index the index of the element in the list to delete
   * @returns the value of the element deleted at the specified index. If index not in range, or element is
   * @throws ListIndexOutOfBoundsError if the specified index is less than starting index and greater than end index
   */
  deleteAt(index) {
    if (index < 0 || index > this._size - 1)
      throw (0, console_1.error)("ListIndexOutOfBoundsError");
    if (index === 0) return this.deleteFirst();
    else if (index === this._size - 1) return this.deleteLast();
    else {
      let current = this._head;
      while (current && current.index < index - 1) {
        current = current.next;
      }
      const deleteNode = current.next;
      current.next = deleteNode.next;
      current.next.prev = current;
      deleteNode.next = null;
      deleteNode.prev = null;
      this._size--;
      return deleteNode.value;
    }
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
   * @returns returns a new instance of {@link DoubleLinkedList} class containing the nodes from the start index to the end
   * index (both inclusive) of the original list
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
    while (current && current.index <= end) {
      list.insertLast(current.value);
      current = current.next;
    }
    return list;
  }
  /**
   * @param  {...any} args variable number of elements to be added to the list
   * @returns an instance of the {@link DoubleLinkedList} class, having nodes of {@link ListNode} instances added in a
   * sequential order
   */
  static create(...args) {
    const list = new DoubleLinkedList();
    args
      .slice(0)
      .reverse()
      .forEach((val) => {
        list.insertFirst(val);
      });
    return list;
  }
}
exports.default = DoubleLinkedList;
