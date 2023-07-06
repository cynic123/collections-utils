"use strict";
/**
 * @author Prithwish Samanta
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  an abstract class with value property, to be inherited by various kinds of node types used in a linked list or a tree
 */
var NodeValue = /** @class */ (function () {
  function NodeValue(value) {
    this._value = value;
  }
  Object.defineProperty(NodeValue.prototype, "value", {
    get: function () {
      return this._value;
    },
    set: function (value) {
      this._value = value;
    },
    enumerable: false,
    configurable: true,
  });
  return NodeValue;
})();
exports.default = NodeValue;
