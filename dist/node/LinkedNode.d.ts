/**
 * @author Prithwish Samanta
 * a class representing the basic node element of a linked list.
 */
/**
 * Node class with properties - value, prev (preceding node reference), next (following node reference) and index of the node
 * in a LinkedList instance
 */
export default class LinkedNode<T> {
  private _value;
  private _next;
  private _index;
  private _prev;
  constructor(
    value: T,
    next: LinkedNode<T> | null,
    index: number,
    prev?: LinkedNode<T> | null
  );
  get value(): T | any;
  set value(v: T | any);
  get next(): LinkedNode<T> | null;
  set next(node: LinkedNode<T> | null);
  get index(): number;
  set index(v: number);
  get prev(): LinkedNode<T> | null;
  set prev(node: LinkedNode<T> | null);
  get show(): object;
}
