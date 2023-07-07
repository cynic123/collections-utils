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
var SingleLinkedList_1 = __importDefault(
  require("../linkedList/SingleLinkedList")
);
/**
 * A singly linked list based implemntation of Queue interface, having a First-In-First-Out mechanism and no size restrictions
 */
var LinkedQueue = /** @class */ (function () {
  function LinkedQueue() {
    this._items = new SingleLinkedList_1.default();
  }
  Object.defineProperty(LinkedQueue.prototype, "size", {
    get: function () {
      return this._items.size;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(LinkedQueue.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: false,
    configurable: true,
  });
  /**
   * inserts an element to the end of the linked list based queue
   * @param data the element to be added to the end of the queue
   */
  LinkedQueue.prototype.push = function (data) {
    this._items.add(data);
  };
  /**
   * @returns the value of the first element of the queue after removing it, returns null if the queue is empty
   */
  LinkedQueue.prototype.poll = function () {
    return null;
    // todo
  };
  /**
   * the value of the last element of the queue after removing it, returns null if the queue is empty
   */
  LinkedQueue.prototype.pollLast = function () {
    throw new Error("Method not implemented.");
  };
  /**
   * inserts an element to the end of the linked list based queue, similar to push method. Since this is a dynamically
   * sized queue implementation, throws no capacity full error
   * @param data the element to be added to the end of the queue
   */
  LinkedQueue.prototype.offer = function (data) {
    this._items.add(data);
  };
  /**
   * @returns the value of the first element of the queue without removing it unlike the poll method. Returns null if
   * the queue is empty
   */
  LinkedQueue.prototype.peek = function () {
    return this._items.getFirst();
  };
  /**
   * @returns the value of the last element in the queue without removing it. Returns null if the queue is empty
   */
  LinkedQueue.prototype.peekLast = function () {
    return this._items.getLast();
  };
  /**
   * @returns true if the queue is empty, else false
   */
  LinkedQueue.prototype.isEmpty = function () {
    return this._items.size === 0;
  };
  return LinkedQueue;
})();
exports.default = LinkedQueue;
