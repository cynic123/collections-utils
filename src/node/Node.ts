/**
 * @author Prithwish Samanta
 */

/**
 *
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
