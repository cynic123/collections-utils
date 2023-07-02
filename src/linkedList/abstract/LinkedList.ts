/**
 * @author Prithwish Samanta
 */

import { error } from "console";
import LinkedNode from "../../node/LinkedNode";

/**
 * an abstract class defining a linked list data structure and its common operations
 */
export default abstract class LinkedList<T> {
  protected _head: LinkedNode<T> | null;
  protected _tail: LinkedNode<T> | null;
  protected _size: number;

  protected constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  protected get head(): LinkedNode<T> | null {
    return this._head;
  }

  protected get tail(): LinkedNode<T> | null {
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

  /**
   * inserts the given element to the end of the linked list
   * @param data
   */
  add(data: T) {
    this.insertLast(data);
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  /**
   *
   * @returns the value of the head element of the list if present, otherwise undefined
   */
  getFirst(): T | any {
    return this._head?.value;
  }

  /**
   *
   * @returns the value of the tail element of the list if present, otherwise undefined
   */
  getLast(): T | any {
    return this._tail?.value;
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
  middleNode(): LinkedNode<T> | null {
    let slow: LinkedNode<T> | any = this._head;
    let fast: LinkedNode<T> | any = this._head;
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
  nodeAt(index: number): LinkedNode<T> | null {
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
   * @returns returns a new array containing the elements of linked list in their original order
   */
  toArray(): number[] | null {
    let current: LinkedNode<T> | null = this._head;
    const arr: number[] = [];
    while (current) {
      arr[current.index] = current.value;
      current = current.next;
    }
    return arr;
  }

  /**
   *
   * @param other other list to compare to
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
