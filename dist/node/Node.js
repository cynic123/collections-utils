"use strict";
/**
 * @author Prithwish Samanta
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  an abstract class with value property, to be inherited by various kinds of node types used in a linked list or a tree
 */
class NodeValue {
  constructor(value) {
    this._value = value;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
}
exports.default = NodeValue;
