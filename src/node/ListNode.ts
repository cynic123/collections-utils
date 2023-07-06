/**
 * @author Prithwish Samanta
 */

import NodeValue from "./NodeValue";

/**
 * a class representing a basic element of a linked list having properties - value inherited from {@link NodeValue} class,
 * prev (preceding node reference), next (following node reference) and index of the node
 */
export default class ListNode<T> extends NodeValue<T> {
  private _next: ListNode<T> | null;
  private _index: number;
  private _prev: ListNode<T> | null;

  constructor(
    value: T,
    next: ListNode<T> | null,
    index: number,
    prev: ListNode<T> | null = null
  ) {
    super(value);
    this._next = next;
    this._index = index;
    this._prev = prev;
  }

  get next(): ListNode<T> | null {
    return this._next;
  }

  set next(node: ListNode<T> | null) {
    this._next = node;
  }

  get index(): number {
    return this._index;
  }

  set index(v: number) {
    this._index = v;
  }

  get prev(): ListNode<T> | null {
    return this._prev;
  }

  set prev(node: ListNode<T> | null) {
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
