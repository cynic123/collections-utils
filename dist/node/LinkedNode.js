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
const Node_1 = __importDefault(require("./Node"));
/**
 * a class representing a basic element of a linked list having properties - value inherited from {@link NodeValue} class,
 * prev (preceding node reference), next (following node reference) and index of the node
 */
class LinkedNode extends Node_1.default {
  constructor(value, next, index, prev = null) {
    super(value);
    this._next = next;
    this._index = index;
    this._prev = prev;
  }
  get next() {
    return this._next;
  }
  set next(node) {
    this._next = node;
  }
  get index() {
    return this._index;
  }
  set index(v) {
    this._index = v;
  }
  get prev() {
    return this._prev;
  }
  set prev(node) {
    this._prev = node;
  }
  get show() {
    return {
      value: this._value,
      index: this._index,
      next: this._next != null ? this._next.show : null,
    };
  }
}
exports.default = LinkedNode;
