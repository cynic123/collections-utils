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
 * A singly linked list based implemntation of Queue interface, having a First-In-First-Out mechanism and no fixed capacity
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
   * @param data
   */
  push(data) {
    this._items.add(data);
  }
  poll() {
    throw new Error("Method not implemented.");
  }
  offer(data) {
    throw new Error("Method not implemented.");
  }
  peek() {
    throw new Error("Method not implemented.");
  }
  peekLast() {
    throw new Error("Method not implemented.");
  }
}
exports.default = LinkedQueue;
