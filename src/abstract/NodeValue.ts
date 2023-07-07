/**
 * @author Prithwish Samanta
 */

/**
 *  an abstract class with value property, to be inherited by various kinds of node types used in a linked list or a tree
 */
export default abstract class NodeValue<T> {
  protected _value: T | any;

  protected constructor(value: T) {
    this._value = value;
  }

  get value(): T | any {
    return this._value;
  }

  set value(value: T) {
    this._value = value;
  }
}
