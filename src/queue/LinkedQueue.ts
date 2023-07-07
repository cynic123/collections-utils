/**
 * @author Prithwish Samanta
 */

import LinkedList from "../abstract/LinkedList";
import Queue from "../abstract/Queue";
import DoubleLinkedList from "../linkedList/DoubleLinkedList";

/**
 * A doubly linked list based implemntation of Queue interface, having a First-In-First-Out mechanism and no size restrictions
 */
export default class LinkedQueue<T> implements Queue<T> {
  protected _items: DoubleLinkedList<T>;

  constructor() {
    this._items = new DoubleLinkedList();
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
   * @returns the value of the first element of the queue after removing it, returns null if the queue is empty
   */
  poll(): T | null {
    return this._items.deleteFirst();
  }

  /**
   * the value of the last element of the queue after removing it, returns null if the queue is empty
   */
  pollLast(): T | null {
    return this._items.deleteLast();
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
   * @returns the value of the first element of the queue without removing it unlike the poll method. Returns null if
   * the queue is empty
   */
  peek(): T | null {
    return this._items.getFirst();
  }

  /**
   * @returns the value of the last element in the queue without removing it. Returns null if the queue is empty
   */
  peekLast(): T | null {
    return this._items.getLast();
  }

  /**
   * @returns true if the queue is empty, else false
   */
  isEmpty(): boolean {
    return this._items.size === 0;
  }

  /**
   * @returns returns a new array containing the elements of the queue in their original order, returns empty array if the
   * queue is empty
   */
  toArray(): T[] {
    return this._items.toArray();
  }

  /**
   * removes all elements from the queue
   */
  clear(): void {
    return this._items.clear();
  }

  /**
   * inserts the given element to the end of the queue
   * @param data data element to be inserted
   */
  add(data: T): void | Error {
    return this._items.add(data);
  }

  /**
   * deletes the given element from the queue
   * @param data element to be deleted from the queue
   * @returns the value of the element deleted
   */
  remove(data: T): T | null {
    return this._items.remove(data);
  }
}
