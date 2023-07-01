/**
 * @author Prithwish Samanta
 * a class representing the basic node element of a linked list.
 */

/**
 * Node class with properties - value, prev (preceding node reference), next (following node reference) and index of the node
 * in a LinkedList instance
 */
export default class LinkedNode<T> {
  private _value: T | any;
  private _next: LinkedNode<T> | null;
  private _index: number;
  private _prev: LinkedNode<T> | null;

  constructor(
    value: T,
    next: LinkedNode<T> | null,
    index: number,
    prev: LinkedNode<T> | null = null
  ) {
    this._value = value;
    this._next = next;
    this._index = index;
    this._prev = prev;
  }

  get value(): T | any {
    return this._value;
  }

  set value(v: T | any) {
    this._value = v;
  }

  get next(): LinkedNode<T> | null {
    return this._next;
  }

  set next(node: LinkedNode<T> | null) {
    this._next = node;
  }

  get index(): number {
    return this._index;
  }

  set index(v: number) {
    this._index = v;
  }

  get prev(): LinkedNode<T> | null {
    return this._prev;
  }

  set prev(node: LinkedNode<T> | null) {
    this._prev = node;
  }

  get show(): object {
    return {
      value: this._value,
      index: this._index,
      next: this._next != null ? this._next.show : null,
    };
  }
}
