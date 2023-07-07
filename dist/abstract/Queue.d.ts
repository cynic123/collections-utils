/**
 * @author Prithwish Samanta
 */
import Collection from "./Collection";
/**
 * an interface with method definitions of a Queue data structure. Can be inherited to different queue types: LinkedQueue, ProprityQueue, etc
 */
export default interface Queue<T> extends Collection<T> {
  /**
   * inserts an element to the queue
   * @param data element to be inserted to queue
   * @throws error if the inherited queue implementation has size restrictions and the queue capacity is full
   */
  push(data: T): void | Error;
  /**
   * @returns the value of the first element of the queue after removing it, returns null if the queue is empty
   */
  poll(): T | null;
  /**
   * @returns the value of the last element of the queue after removing it, returns null if the queue is empty
   */
  pollLast(): T | null;
  /**
   * @param data element to be inserted to queue, ignores the operation if the inherited queue implementation has size
   * restrictions and the queue capacity is full
   */
  offer(data: T): void;
  /**
   * @returns the value of the first element of the queue, or null if the queue is empty
   */
  peek(): T | null;
  /**
   * @returns the last element of the queue, or null if the queue is empty
   */
  peekLast(): T | null;
  /**
   * @returns true if the queue is empty, else false
   */
  isEmpty(): boolean;
}
