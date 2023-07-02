/**
 * @author Prithwish Samanta
 */

import { error } from "console";
import LinkedList from "../../linkedList/abstract/LinkedList";
import SingleLinkedList from "../../linkedList/impl/SingleLinkedList";
import Queue from "../abstract/Queue";

/**
 * A singly linked list based implemntation of Queue interface, having a First-In-First-Out mechanism and no fixed capacity
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
   * inserts an element to the end of the queue
   * @param data
   */
  push(data: T): void | Error {
    this._items.add(data);
  }

  poll(): T | undefined {
    throw new Error("Method not implemented.");
  }
  offer(data: T): void {
    throw new Error("Method not implemented.");
  }
  peek(): T | undefined {
    throw new Error("Method not implemented.");
  }
  peekLast(): T | undefined {
    throw new Error("Method not implemented.");
  }
}
