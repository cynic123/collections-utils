/**
 * @author Prithwish Samanta
 */
import LinkedList from "../abstract/LinkedList";
import LinkedNode from "../../node/LinkedNode";
/**
 * A singly linked list implementation of LinkedList class, with each node having references to only the following node
 */
export default class SingleLinkedList<T> extends LinkedList<T> {
  constructor();
  get head(): LinkedNode<T> | null;
  /**
   * method which inserts the given data at the beginning
   * @param data
   */
  protected insertFirst(data: T, index: number): void;
  /**
   * method which inserts the given data at the end
   * @param data
   * @param index
   */
  protected insertLast(data: T, index: number): void;
  /**
   *
   * @param data data element to be inserted
   * @param index index at which the given element to be inserted
   */
  insertAt(data: T, index: number): void;
  /**
   * reverses the list
   */
  reverse(): void;
  /**
   *
   * @param start
   * @param end
   * @returns returns a new list containing the nodes from the start index to the end index (both inclusive) of the original list
   */
  subList(start: number, end: number): LinkedList<T>;
  /**
   *
   * @param  {...any} args variable number of elements to be added to the list
   * @returns an instance of the SingleLinkedList class, with arguments passed being represented as nodes in a sequential order
   */
  static create(...args: any[]): LinkedList<any>;
}
