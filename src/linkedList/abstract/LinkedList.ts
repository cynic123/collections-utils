/**
 * @author Prithwish Samanta
 */

import { error } from "console";
import ListNode from "../../node/ListNode";

/**
 * an abstract class defining a linked list data structure and common operations performed on it
 */
export default abstract class LinkedList<T> {
  protected _head: ListNode<T> | null;
  protected _tail: ListNode<T> | null;
  protected _size: number;

  protected constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  protected get head(): ListNode<T> | null {
    return this._head;
  }

  protected get tail(): ListNode<T> | null {
    return this._tail;
  }

  get size(): number {
    return this._size;
  }

  /**
   * method which inserts the given data at the beginning
   * @param data
   */
  protected abstract insertFirst(data: T): void;

  /**
   * method which inserts the given data at the end
   * @param data
   * @param index
   */
  protected abstract insertLast(data: T): void;

  /**
   * @param index index at which the given element to be inserted
   * @param data data element to be inserted
   * @throws ListIndexOutOfBoundsError if the specified index is less than starting index and greater than end index
   */
  protected abstract insertAt(index: number, data: T): void;

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
   * @param data
   */
  add(data: T) {
    this.insertLast(data);
  }

  /**
   * @returns true if the list is epmty, else false
   */
  isEmpty(): boolean {
    return !this._head && !this._tail && this._size === 0;
  }

  /**
   *
   * @returns the value of the head element of the list if present, otherwise undefined
   */
  getFirst(): T | null {
    return this._head ? this.head?.value : null;
  }

  /**
   *
   * @returns the value of the tail element of the list if present, otherwise undefined
   */
  getLast(): T | null {
    return this._tail ? this._tail.value : null;
  }

  /**
   * prints the list
   */
  print(): string {
    let s = "";
    let temp = this._head;
    while (temp) {
      s = s.concat(temp.value, " -> ");
      temp = temp.next;
    }
    s = s.length > 0 ? s.concat("null") : "empty";
    return s;
  }

  /**
   *
   * @returns middle node of the list
   */
  middleNode(): ListNode<T> | null {
    let slow: ListNode<T> | any = this._head;
    let fast: ListNode<T> | any = this._head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  /**
   *
   * @returns element at the middle of the list, or undefined if the list is empty
   */
  middle(): T | any {
    return this.middleNode()?.value;
  }

  /**
   *
   * @param index
   * @returns node at the specified index
   */
  nodeAt(index: number): ListNode<T> | null {
    if (index < 0 || index >= this._size) {
      throw error("Invalid index!");
    }
    let current = this._head;
    while (current && current.index !== index) {
      current = current.next;
    }
    return current;
  }

  /**
   *
   * @returns returns a new array containing the elements of the linked list in their original order, returns null if the
   * list is empty
   */
  toArray(): number[] | null {
    let current: ListNode<T> | null = this._head;
    const arr: number[] = [];
    while (current) {
      arr[current.index] = current.value;
      current = current.next;
    }
    return arr.length ? arr : null;
  }

  /**
   *
   * @param other other list (an instance of {@link LinkedList}) to compare to
   * @returns if the referred to list and the other list passed as argument as same in size and values
   */
  equals(other: LinkedList<T>): boolean {
    let head1 = this._head;
    let head2 = other.head;
    while (head1 && head2) {
      if (head1.value !== head2.value) {
        return false;
      }
      head1 = head1.next;
      head2 = head2.next;
    }
    if (!head1 && !head2) return true;
    else return false;
  }

  /**
   *
   * @returns true if the list is a palindrome, else false
   */
  palindrome(): boolean {
    if (!this._head || !this._head.next) {
      return true;
    }
    const mid = Math.floor(this.size / 2);
    const odd = this.size % 2 !== 0;
    const lList = this.subList(0, odd ? mid : mid - 1);
    const rList = this.subList(mid, this.size - 1);
    rList.reverse();
    return lList.equals(rList);
  }
}
