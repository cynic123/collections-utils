"use strict";
/**
 * @author Prithwish Samanta
 */
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
var LinkedList_1 = __importDefault(require("../abstract/LinkedList"));
var ListNode_1 = __importDefault(require("../abstract/ListNode"));
/**
 * A doubly linked list implementation of {@link LinkedList} class, where each node are an instance of the {@link ListNode}
 * class, containing references to both the preceding and the following nodes in the list
 */
var DoubleLinkedList = /** @class */ (function (_super) {
  __extends(DoubleLinkedList, _super);
  function DoubleLinkedList() {
    return _super.call(this) || this;
  }
  /**
   * inserts the given element at the beginning of the list
   * @param data
   */
  DoubleLinkedList.prototype.insertFirst = function (data) {
    var currHead = this._head;
    var newNode = new ListNode_1.default(data, currHead, 0);
    this._head = newNode;
    if (!currHead) this._tail = newNode;
    else currHead.prev = newNode;
    var current = this._head.next;
    while (current) {
      current.index++;
      current = current.next;
    }
    this._size++;
  };
  /**
   * inserts the given element at the end of the list
   * @param data
   * @param index
   */
  DoubleLinkedList.prototype.insertLast = function (data) {
    var currTail = this._tail;
    var newNode = new ListNode_1.default(data, null, this.size(), currTail);
    this._tail = newNode;
    if (!currTail) {
      this._head = newNode;
    } else {
      currTail.next = newNode;
    }
    this._size++;
  };
  /**
   * inserts the given element at the provided index of the list
   * @param index index at which the given element to be inserted
   * @param data data element to be inserted
   * @throws ListIndexOutOfBoundsError if the specified index is less than starting index and greater than end index
   */
  DoubleLinkedList.prototype.insertAt = function (index, data) {
    if (index < 0 || index > this.size() - 1)
      throw (0, console_1.error)("Invalid index!");
    if (index === 0) return this.insertFirst(data);
    else if (index === this._size - 1) return this.insertLast(data);
    else {
      var current = this._head;
      while (current && current.index < index - 1) {
        current = current.next;
      }
      var temp = new ListNode_1.default(
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
  };
  /**
   * inserts the given element at the end of the list
   * @param data data element to be inserted
   */
  DoubleLinkedList.prototype.insert = function (data) {
    this.insertLast(data);
  };
  /**
   * @returns the value of the first element after removing it from the list, returns null if the list is empty
   */
  DoubleLinkedList.prototype.deleteFirst = function () {
    var head = this._head;
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
  };
  /**
   * @returns the value of the last element after removing it from the list, returns null if the list is empty
   */
  DoubleLinkedList.prototype.deleteLast = function () {
    var tail = this._tail;
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
  };
  /**
   * @param data the element to be deleted from the list
   * @returns the value of the provided element after removing it from the list, if the list is empty or element is not
   * present, returns null
   */
  DoubleLinkedList.prototype.delete = function (data) {
    var current = this._head;
    while (current) {
      if (current.value === data) {
        if (current.index === 0) return this.deleteFirst();
        else if (current.index === this.size() - 1) return this.deleteLast();
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
  };
  /**
   * @param index the index of the element in the list to delete
   * @returns the value of the element deleted at the specified index. If index not in range, or element is
   * @throws ListIndexOutOfBoundsError if the specified index is less than starting index and greater than end index
   */
  DoubleLinkedList.prototype.deleteAt = function (index) {
    if (index < 0 || index > this._size - 1)
      throw (0, console_1.error)("ListIndexOutOfBoundsError");
    if (index === 0) return this.deleteFirst();
    else if (index === this._size - 1) return this.deleteLast();
    else {
      var current = this._head;
      while (current && current.index < index - 1) {
        current = current.next;
      }
      var deleteNode = current.next;
      current.next = deleteNode.next;
      current.next.prev = current;
      deleteNode.next = null;
      deleteNode.prev = null;
      this._size--;
      return deleteNode.value;
    }
  };
  /**
   * reverses the list on which the method is called upon
   */
  DoubleLinkedList.prototype.reverse = function () {
    var prev = null;
    var current = this._head;
    this._tail = current;
    while (current) {
      var next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current.index = this._size - current.index - 1;
      current = next;
    }
    this._head = prev;
  };
  /**
   *
   * @param start
   * @param end
   * @returns returns a new instance of {@link DoubleLinkedList} class containing the nodes from the start index to the end
   * index (both inclusive) of the original list
   */
  DoubleLinkedList.prototype.subList = function (start, end) {
    var _a;
    if (start < 0 || end >= this._size || start > end) {
      throw (0, console_1.error)("Invalid range indices!");
    }
    if (start === end) {
      return DoubleLinkedList.create(
        (_a = this.nodeAt(start)) === null || _a === void 0 ? void 0 : _a.value
      );
    }
    var current = this._head;
    while (current && current.index < start) {
      current = current.next;
    }
    var list = new DoubleLinkedList();
    while (current && current.index <= end) {
      list.insertLast(current.value);
      current = current.next;
    }
    return list;
  };
  /**
   * @param  {...any} args variable number of elements to be added to the list
   * @returns an instance of the {@link DoubleLinkedList} class, having nodes of {@link ListNode} instances added in a
   * sequential order
   */
  DoubleLinkedList.create = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var list = new DoubleLinkedList();
    args
      .slice(0)
      .reverse()
      .forEach(function (val) {
        list.insertFirst(val);
      });
    return list;
  };
  return DoubleLinkedList;
})(LinkedList_1.default);
exports.default = DoubleLinkedList;
