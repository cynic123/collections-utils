/**
 * @author Prithwish Samanta
 * a class which represents the basic element of a linked list.
 */

/**
 * Node class with value, prev (preceding node reference), next (following node reference) and index of the node, when added
 * in a LinkedList instance.
 */
export class Node<T> {
  private _value: T | any;
  private _next: Node<T> | null;
  private _index: number;
  private _prev: Node<T> | null;

  constructor(
    value: T,
    next: Node<T> | null,
    index: number,
    prev: Node<T> | null = null
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

  get next(): Node<T> | null {
    return this._next;
  }

  set next(node: Node<T> | null) {
    this._next = node;
  }

  get index(): number {
    return this._index;
  }

  set index(v: number) {
    this._index = v;
  }

  get prev(): Node<T> | null {
    return this._prev;
  }

  set prev(node: Node<T> | null) {
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
