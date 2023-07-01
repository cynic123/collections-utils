import Queue from "../abstract/Queue";
export default class LinkedQueue<T> implements Queue<T> {
  add(data: T): void | Error;
  poll(): T | undefined;
  offer(data: T): void;
  peek(): T | undefined;
  peekLast(): T | undefined;
}
