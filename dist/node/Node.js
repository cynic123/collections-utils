"use strict";
/**
 * @author Prithwish Samanta
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
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
