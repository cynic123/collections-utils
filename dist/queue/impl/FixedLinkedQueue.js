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
const LinkedQueue_1 = __importDefault(require("./LinkedQueue"));
/**
 * A LinkedQueue implementation with size restrictions imposed
 */
class FixedLinkedQueue extends LinkedQueue_1.default {
  constructor(size) {
    super();
    this._size = size;
  }
  get size() {
    return this._size;
  }
  set size(size) {
    this._size = size;
  }
}
exports.default = FixedLinkedQueue;
