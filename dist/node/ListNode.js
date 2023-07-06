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
var NodeValue_1 = __importDefault(require("./NodeValue"));
/**
 * a class representing a basic element of a linked list having properties - value inherited from {@link NodeValue} class,
 * prev (preceding node reference), next (following node reference) and index of the node
 */
var ListNode = /** @class */ (function (_super) {
  __extends(ListNode, _super);
  function ListNode(value, next, index, prev) {
    if (prev === void 0) {
      prev = null;
    }
    var _this = _super.call(this, value) || this;
    _this._next = next;
    _this._index = index;
    _this._prev = prev;
    return _this;
  }
  Object.defineProperty(ListNode.prototype, "next", {
    get: function () {
      return this._next;
    },
    set: function (node) {
      this._next = node;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(ListNode.prototype, "index", {
    get: function () {
      return this._index;
    },
    set: function (v) {
      this._index = v;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(ListNode.prototype, "prev", {
    get: function () {
      return this._prev;
    },
    set: function (node) {
      this._prev = node;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(ListNode.prototype, "show", {
    get: function () {
      return {
        value: this._value,
        index: this._index,
        next: this._next != null ? this._next.show : null,
      };
    },
    enumerable: false,
    configurable: true,
  });
  return ListNode;
})(NodeValue_1.default);
exports.default = ListNode;
