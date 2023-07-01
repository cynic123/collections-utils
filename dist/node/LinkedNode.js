"use strict";
/**
 * @author Prithwish Samanta
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * a class representing a basic element of a linked list having properties - value, prev (preceding node reference), next (following node reference) and index of the node
 */
class LinkedNode {
  constructor(value, next, index, prev = null) {
    this._value = value;
    this._next = next;
    this._index = index;
    this._prev = prev;
  }
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = v;
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
