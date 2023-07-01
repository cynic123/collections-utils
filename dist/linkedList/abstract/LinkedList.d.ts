/**
 * @author Prithwish Samanta
 * an abstract class defining a linked list data structure and its common operations
 */
import LinkedNode from "../../node/LinkedNode";
export default abstract class LinkedList<T> {
  protected _head: LinkedNode<T> | null;
  protected _tail: LinkedNode<T> | null;
  protected _size: number;
  protected constructor();
  protected get head(): LinkedNode<T> | null;
  protected get size(): number;
  /**
   * method which inserts the given data at the beginning
   * @param data
   */
  protected abstract insertFirst(data: T, index: number): void;
  /**
   * method which inserts the given data at the end
   * @param data
   * @param index
   */
  protected abstract insertLast(data: T, index: number): void;
  /**
   *
   * @param data data element to be inserted
   * @param index index at which the given element to be inserted
   */
  protected abstract insertAt(data: T, index: number): void;
  /**
   * reverses the list
   */
  abstract reverse(): void;
  /**
   *
   * @param start
   * @param end
   * @returns returns a new list containing the nodes from the start index to the end index (both inclusive) of the original list
   */
  protected abstract subList(start: number, end: number): LinkedList<T>;
  isEmpty(): boolean;
  /**
   *
   * @returns the value of the head element of the list if present, otherwise undefined
   */
  getFirst(): T | any;
  /**
   *
   * @returns the value of the tail element of the list if present, otherwise undefined
   */
  getLast(): T | any;
  /**
   * prints the list
   */
  print(): string;
  /**
   *
   * @returns middle node of the list
   */
  middle(): LinkedNode<T> | null;
  /**
   *
   * @param index
   * @returns node at the specified index
   */
  protected nodeAt(index: number): LinkedNode<T> | null;
  /**
   *
   * @returns returns a new array containing the elements of linked list in their original order
   */
  toArray(): number[] | null;
  /**
   *
   * @param other other list to compare to
   * @returns if the referred to list and the other list passed as argument as same in size and values
   */
  equals(other: LinkedList<T>): boolean;
  /**
   *
   * @returns true if the list is a palindrome, else false
   */
  palindrome(): boolean;
}
