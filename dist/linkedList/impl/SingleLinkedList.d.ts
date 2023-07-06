/**
 * @author Prithwish Samanta
 */
import LinkedList from "../abstract/LinkedList";
import ListNode from "../../node/ListNode";
/**
 * A singly linked list implementation of {@link LinkedList} class, where each node are an instance of the {@link ListNode}
 * class, containing references to only the following node in the list
 */
export default class SingleLinkedList<T> extends LinkedList<T> {
  constructor();
  get head(): ListNode<T> | null;
  /**
   * inserts the given element at the beginning of the list
   * @param data
   */
  protected insertFirst(data: T): void;
  /**
   * inserts the given element at the end of the list
   * @param data
   * @param index
   */
  protected insertLast(data: T): void;
  /**
   * inserts the given element at the provided index of the list
   * @param index index at which the given element to be inserted
   * @param data data element to be inserted
   * @throws ListIndexOutOfBoundsError if the specified index is less than starting index and greater than end index
   */
  insertAt(index: number, data: T): void;
  /**
   * inserts the given element at the end of the list
   * @param data data element to be inserted
   */
  insert(data: T): void;
  /**
   * @returns the value of the first element after removing it from the list, returns null if the list is empty
   */
  deleteFirst(): T | null;
  /**
   * @returns the value of the last element after removing it from the list, returns null if the list is empty
   */
  deleteLast(): T | null;
  /**
   * @param data the element to be deleted from the list
   * @returns the value of the provided element after removing it from the list, if the list is empty or element is not
   * present, returns null
   */
  delete(data: T): T | null;
  /**
   * @param index the index of the element in the list to delete
   * @returns the value of the element deleted at the specified index. If index not in range, or element is
   * @throws ListIndexOutOfBoundsError if the specified index is less than starting index and greater than end index
   */
  deleteAt(index: number): T | null;
  /**
   * reverses the list on which the method is called upon
   */
  reverse(): void;
  /**
   *
   * @param start
   * @param end
   * @returns returns a new instance of {@link SingleLinkedList} class containing the nodes from the start index to the end
   * index (both inclusive) of the original list
   */
  subList(start: number, end: number): LinkedList<T | any>;
  /**
   * @param  {...any} args variable number of elements to be added to the list
   * @returns an instance of the {@link SingleLinkedList} class, having nodes of {@link ListNode} instances added in a
   * sequential order
   */
  static create(...args: any[]): LinkedList<any>;
}
