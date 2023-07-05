"use strict";
/**
 * @author Prithwish Samanta
 * a class representing the basic element of any form of binary tree.
 */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const NodeValue_1 = __importDefault(require("./NodeValue"));
/**
 * a class representing the basic element of any form of binary tree having value inherited from {@link NodeValue} class,
 * left (left child reference), right (right child reference), when added in a Tree instance.
 */
class TreeNode extends NodeValue_1.default {
  constructor(value, left, right) {
    super(value);
    this._left = left;
    this._right = right;
  }
}
exports.default = TreeNode;
