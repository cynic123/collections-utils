"use strict";
/**
 * @author Prithwish Samanta
 * a class representing the basic element of any form of binary tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * a class representing the basic element of any form of binary tree having value, left (left child reference), right (right child reference), when added in a Tree instance.
 */
class TreeNode {
  constructor(value, left, right) {
    this._value = value;
    this._left = left;
    this._right = right;
  }
}
exports.default = TreeNode;
