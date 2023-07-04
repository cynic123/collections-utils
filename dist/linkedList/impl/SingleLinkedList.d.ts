/**
 * @author Prithwish Samanta
 */
import LinkedList from "../abstract/LinkedList";
import LinkedNode from "../../node/LinkedNode";
/**
 * A singly linked list implementation of {@link LinkedList} class, with each node having references to only the following node
 */
export default class SingleLinkedList<T> extends LinkedList<T> {
  constructor();
  get head(): LinkedNode<T> | null;
  /**
   * method which inserts the given data at the beginning
   * @param data
   */
  protected insertFirst(data: T): void;
  /**
   * method which inserts the given data at the end
   * @param data
   * @param index
   */
  protected insertLast(data: T): void;
  /**
   * @param index index at which the given element to be inserted
   * @param data data element to be inserted
   * @throws Invalid index error if the specified index is less than starting index and greater than end index
   */
  insertAt(index: number, data: T): void;
  /**
   * @returns the value of the first element after removing it from the list, returns null if the list is empty
   */
  deleteFirst(): number | null;
  /**
   * @returns the value of the last element after removing it from the list, returns null if the list is empty
   */
  deleteLast(): number | null;
  /**
   * @param data the element to be deleted from the list
   * @returns the value of the provided element after removing it from the list, if the list is empty or element is not
   * present, returns null
   */
  delete(data: T): number | null;
  /**
   * @param index the index of the element in the list to delete
   * @returns the value of the element deleted at the specified index. If index not in range, or element is
   */
  deleteAt(index: number): number | null;
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
   * @returns an instance of the {@link SingleLinkedList} class, having nodes of {@link LinkedNode} instances added in a
   * sequential order
   */
  static create(...args: any[]): LinkedList<any>;
}
