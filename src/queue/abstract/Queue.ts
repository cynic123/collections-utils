/**
 * @author Prithwish Samanta
 */

/**
 * an interface with method definitions of a Queue data structure. Can be inherited to different queue types: LinkedQueue, ProprityQueue, etc
 */
export default interface Queue<T> {
  /**
   * inserts an element to the queue
   * @param data element to be inserted to queue
   * @throws error if the inherited queue implementation has size restrictions and the queue capacity is full
   */
  push(data: T): void | Error;

  /**
   * @returns the value of the first element of the queue after removing it, or undefined if the queue is empty
   */
  poll(): T | undefined;

  /**
   * @param data element to be inserted to queue, ignores the operation if the inherited queue implementation has size
   * restrictions and the queue capacity is full
   */
  offer(data: T): void;

  /**
   * @returns the value of the first element of the queue, or undefined if the queue is empty
   */
  peek(): T | undefined;

  /**
   * @returns the last element of the queue, or undefined if the queue is empty
   */
  peekLast(): T | undefined;

  /**
   * @returns true if the queue is empty, else false
   */
  isEmpty(): boolean;
}
