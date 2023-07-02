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
const SingleLinkedList_1 = __importDefault(
  require("../../linkedList/impl/SingleLinkedList")
);
/**
 * A singly linked list based implemntation of Queue interface, having a First-In-First-Out mechanism and no size restrictions
 */
class LinkedQueue {
  constructor() {
    this._items = new SingleLinkedList_1.default();
  }
  get size() {
    return this._items.size;
  }
  get items() {
    return this._items;
  }
  /**
   * inserts an element to the end of the linked list based queue
   * @param data the element to be added to the end of the queue
   */
  push(data) {
    this._items.add(data);
  }
  /**
   * @returns the value of the first element in the queue after removing from the queue. If the queue is empty, returns
   * undefined
   */
  poll() {
    throw undefined;
    // todo
  }
  /**
   * inserts an element to the end of the linked list based queue, similar to push method. Since this is a dynamically
   * sized queue implementation, throws no capacity full error
   * @param data the element to be added to the end of the queue
   */
  offer(data) {
    this._items.add(data);
  }
  /**
   * @returns the value of the first element of the queue without removing it unlike the poll method. Returns undefined if
   * the queue is empty
   */
  peek() {
    throw new Error("Method not implemented.");
  }
  /**
   * @returns the value of the last element in the queue without removing it. Returns undefined if the queue is empty
   */
  peekLast() {
    throw new Error("Method not implemented.");
  }
  /**
   * @returns true if the queue is empty, else false
   */
  isEmpty() {
    return this._items.size === 0;
  }
}
exports.default = LinkedQueue;
