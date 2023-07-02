/**
 * @author Prithwish Samanta
 */

import LinkedList from "../../linkedList/abstract/LinkedList";
import SingleLinkedList from "../../linkedList/impl/SingleLinkedList";
import Queue from "../abstract/Queue";

/**
 * A singly linked list based implemntation of Queue interface, having a First-In-First-Out mechanism and no size restrictions
 */
export default class LinkedQueue<T> implements Queue<T> {
  protected _items: LinkedList<T>;

  constructor() {
    this._items = new SingleLinkedList();
  }

  get size(): number {
    return this._items.size;
  }

  get items(): LinkedList<T> {
    return this._items;
  }

  /**
   * inserts an element to the end of the linked list based queue
   * @param data the element to be added to the end of the queue
   */
  push(data: T): void | Error {
    this._items.add(data);
  }

  /**
   * @returns the value of the first element in the queue after removing from the queue. If the queue is empty, returns
   * undefined
   */
  poll(): T | undefined {
    throw undefined;
    // todo
  }

  /**
   * inserts an element to the end of the linked list based queue, similar to push method. Since this is a dynamically
   * sized queue implementation, throws no capacity full error
   * @param data the element to be added to the end of the queue
   */
  offer(data: T): void {
    this._items.add(data);
  }

  /**
   * @returns the value of the first element of the queue without removing it unlike the poll method. Returns undefined if
   * the queue is empty
   */
  peek(): T | undefined {
    return this._items.getFirst();
  }

  /**
   * @returns the value of the last element in the queue without removing it. Returns undefined if the queue is empty
   */
  peekLast(): T | undefined {
    return this._items.getLast();
  }

  /**
   * @returns true if the queue is empty, else false
   */
  isEmpty(): boolean {
    return this._items.size === 0;
  }
}
