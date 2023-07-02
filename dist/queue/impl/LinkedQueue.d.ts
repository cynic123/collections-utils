/**
 * @author Prithwish Samanta
 */
import LinkedList from "../../linkedList/abstract/LinkedList";
import Queue from "../abstract/Queue";
/**
 * A singly linked list based implemntation of Queue interface, having a First-In-First-Out mechanism and no fixed capacity
 */
export default class LinkedQueue<T> implements Queue<T> {
  protected _items: LinkedList<T>;
  constructor();
  get size(): number;
  get items(): LinkedList<T>;
  /**
   * inserts an element to the end of the linked list based queue
   * @param data
   */
  push(data: T): void | Error;
  poll(): T | undefined;
  offer(data: T): void;
  peek(): T | undefined;
  peekLast(): T | undefined;
}
