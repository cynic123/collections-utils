/**
 * @author Prithwish Samanta
 */
/**
 *
 */
export default abstract class NodeValue<T> {
  protected _value: T | any;
  protected constructor(value: T);
  get value(): T | any;
  set value(value: T);
}
