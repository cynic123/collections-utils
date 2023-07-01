import Queue from "../abstract/Queue";

/**
 * A singly linked list based implemntation of Queue interface, having a First-In-First-Out mechanism
 */
export default class LinkedQueue<T> implements Queue<T> {
  // todo
  add(data: T): void | Error {
    throw new Error("Method not implemented.");
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
