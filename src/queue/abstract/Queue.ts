export default interface Queue<T> {
  /**
   * adds the argument element to the queue
   * @param data element to be inserted to queue
   * @throws error if the inherited queue implementation has size restrictions and the queue capacity is full
   */
  add(data: T): void | Error;

  /**
   * retrieves the element at the head of the queue, or undefined if the queue is empty
   */
  poll(): T | undefined;

  /**
   * @param data element to be inserted to queue, ignores the operation if the inherited queue implementation has size restrictions and the queue capacity is full
   */
  offer(data: T): void;

  /**
   * returns the element at the beginning of the queue, or undefined if the queue is empty
   */
  peek(): T | undefined;

  /**
   * returns the element at the end of the queue, or null if the queue is empty
   */
  peekLast(): T | undefined;
}
