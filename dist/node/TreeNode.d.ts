/**
 * @author Prithwish Samanta
 * a class representing the basic element of any form of binary tree.
 */
import NodeValue from "./Node";
/**
 * a class representing the basic element of any form of binary tree having value inherited from {@link NodeValue} class,
 * left (left child reference), right (right child reference), when added in a Tree instance.
 */
export default class TreeNode<T> extends NodeValue<T> {
  private _left;
  private _right;
  protected constructor(
    value: T,
    left: TreeNode<T> | null,
    right: TreeNode<T> | null
  );
}
