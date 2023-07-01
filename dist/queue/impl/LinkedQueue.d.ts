import Queue from "../abstract/Queue";
/**
 * A singly linked list based implemntation of Queue interface, having a First-In-First-Out mechanism
 */
export default class LinkedQueue<T> implements Queue<T> {
  add(data: T): void | Error;
  poll(): T | undefined;
  offer(data: T): void;
  peek(): T | undefined;
  peekLast(): T | undefined;
}
