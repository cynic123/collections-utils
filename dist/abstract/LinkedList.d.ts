/**
 * @author Prithwish Samanta
 */
import Collection from "./Collection";
import ListNode from "./ListNode";
/**
 * an abstract class defining a linked list data structure and common operations performed on it
 */
export default abstract class LinkedList<T> implements Collection<T> {
  protected _head: ListNode<T> | null;
  protected _tail: ListNode<T> | null;
  protected _size: number;
  protected constructor();
  protected get head(): ListNode<T> | null;
  protected get tail(): ListNode<T> | null;
  get size(): number;
  /**
   * inserts the given element at the beginning of the list
   * @param data
   */
  protected abstract insertFirst(data: T): void;
  /**
   * inserts the given element at the end of the list
   * @param data
   * @param index
   */
  protected abstract insertLast(data: T): void;
  /**
   * inserts the given element at the provided index of the list
   * @param index index at which the given element to be inserted
   * @param data data element to be inserted
   * @throws ListIndexOutOfBoundsError if the specified index is less than starting index and greater than end index
   */
  protected abstract insertAt(index: number, data: T): void;
  /**
   * inserts the given element at the end of the list
   * @param data data element to be inserted
   */
  protected abstract insert(data: T): void;
  /**
   * @returns the value of the first element after removing it from the list, if the list is empty returns null
   */
  protected abstract deleteFirst(): T | null;
  /**
   * @returns the value of the last element after removing it from the list, if the list is empty returns null
   */
  protected abstract deleteLast(): T | null;
  /**
   * @param data the element to be deleted from the list
   * @returns the value of the provided element after removing it from the list, if the list is empty or element is not
   * present, returns null
   */
  protected abstract delete(data: T): T | null;
  /**
   * @param index the index of the element in the list to delete
   * @returns the value of the element deleted at the specified index. If index not in range, or element is
   * @throws ListIndexOutOfBoundsError if the specified index is less than starting index and greater than end index
   */
  protected abstract deleteAt(index: number): T | null;
  /**
   * reverses the list on which the method is called upon
   */
  protected abstract reverse(): void;
  /**
   *
   * @param start
   * @param end
   * @returns returns a new list containing the nodes from the start index to the end index (both inclusive) of the original list
   */
  protected abstract subList(start: number, end: number): LinkedList<T>;
  /**
   * inserts the given element to the end of the linked list
   * @param data data element to be inserted
   */
  add(data: T): void;
  /**
   * deletes the given element from the list
   * @param data element to be deleted from the list
   * @returns the value of the element deleted
   */
  remove(data: T): T | null;
  /**
   * @returns true if the list is epmty, else false
   */
  isEmpty(): boolean;
  /**
   * removes all elements from the list
   */
  clear(): void;
  /**
   *
   * @returns the value of the head element of the list if present, otherwise null
   */
  getFirst(): T | null;
  /**
   *
   * @returns the value of the tail element of the list if present, otherwise null
   */
  getLast(): T | null;
  /**
   * prints the list
   */
  print(): string;
  /**
   *
   * @returns middle node of the list
   */
  middleNode(): ListNode<T> | null;
  /**
   *
   * @returns element at the middle of the list, or undefined if the list is empty
   */
  middle(): T | any;
  /**
   *
   * @param index
   * @returns node at the specified index
   */
  nodeAt(index: number): ListNode<T> | null;
  /**
   *
   * @returns returns a new array containing the elements of the linked list in their original order, returns empty array if the
   * list is empty
   */
  toArray(): T[];
  /**
   *
   * @param other other list (an instance of {@link LinkedList}) to compare to
   * @returns if the referred to list and the other list passed as argument as same in size and values
   */
  equals(other: LinkedList<T>): boolean;
  /**
   *
   * @returns true if the list is a palindrome, else false
   */
  palindrome(): boolean;
}
