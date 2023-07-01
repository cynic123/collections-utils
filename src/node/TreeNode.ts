/**
 * @author Prithwish Samanta
 * a class representing the basic element of any form of binary tree.
 */

/**
 * Node class with value, left (left child reference), right (right child reference), when added in a Tree instance.
 */
export default class TreeNode<T> {
  private _value: T;
  private _left: TreeNode<T> | null;
  private _right: TreeNode<T> | null;

  protected constructor(
    value: T,
    left: TreeNode<T> | null,
    right: TreeNode<T> | null
  ) {
    this._value = value;
    this._left = left;
    this._right = right;
  }
}
