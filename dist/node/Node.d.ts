/**
 * @author Prithwish Samanta
 */
/**
 *  an abstract class with value property, to be inherited by various kinds of node types used in a linked list or a tree
 */
export default abstract class NodeValue<T> {
  protected _value: T | any;
  protected constructor(value: T);
  get value(): T | any;
  set value(value: T);
}
