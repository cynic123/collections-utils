/**
 * @author Prithwish Samanta
 * a doubly linked list implementation of abstract class LinkedList
 */

import { error } from "console";
import LinkedList from "../abstract/LinkedList";
import LinkedNode from "../../node/LinkedNode";

/**
 * A doubly linked list implementation of LinkedList class, with each node having references to both preceding and following
 * nodes
 */
export default class DoubleLinkedList<T> extends LinkedList<T> {
  constructor() {
    super();
  }

  /**
   * method which inserts the given data at the beginning
   * @param data
   */
  protected insertFirst(data: T, index: number): void {
    const currHead = this._head;
    const newNode = new LinkedNode(data, currHead, index);
    this._head = newNode;
    if (!currHead) this._tail = newNode;
    else currHead.prev = newNode;
    this._size++;
  }

  /**
   * method which inserts the given data at the end
   * @param data
   * @param index
   */
  protected insertLast(data: T, index: number): void {
    const currTail = this._tail;
    const newNode = new LinkedNode(data, null, index, currTail);
    this._tail = newNode;
    if (!currTail) {
      this._head = newNode;
    } else {
      currTail.next = newNode;
    }
    this._size++;
  }

  /**
   *
   * @param data data element to be inserted
   * @param index index at which the given element to be inserted
   */
  insertAt(data: T, index: number): void {
    if (index < 0 || index >= this._size) throw error("Invalid index!");
    let current: LinkedNode<T> | any = this._head;
    let currIndex = 0;
    while (current && currIndex < index) {
      current = current.next;
      currIndex++;
    }
    const prev = current.prev;
    const temp = new LinkedNode(data, current, currIndex, prev);
    prev.next = temp;
    current = current.next;
    while (current) {
      current.index = current.index + 1;
      current = current.next;
    }
  }

  /**
   * reverses the list
   */
  reverse(): void {
    let prev = null;
    let current = this._head;
    this._tail = current;
    while (current) {
      const next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current.index = this._size - current.index - 1;
      current = next;
    }
    this._head = prev;
  }

  /**
   *
   * @param start
   * @param end
   * @returns returns a new list containing the nodes from the start index to the end index (both inclusive) of the original list
   */
  subList(start: number, end: number): LinkedList<T> {
    if (start < 0 || end >= this._size || start > end) {
      throw error("Invalid range indices!");
    }
    if (start === end) {
      return DoubleLinkedList.create(this.nodeAt(start)?.value);
    }
    let current = this._head;
    while (current && current.index < start) {
      current = current.next;
    }
    const list = new DoubleLinkedList();
    let count = 0;
    while (current && current.index <= end) {
      list.insertLast(current.value, count++);
      current = current.next;
    }
    return list;
  }

  /**
   *
   * @param  {...any} args variable number of elements to be added to the list
   * @returns an instance of the DoubleLinkedList class, with arguments passed being represented as nodes in a sequential order
   */
  static create(...args: any[]): LinkedList<any> {
    const list = new DoubleLinkedList();
    let count: number = args ? args.length - 1 : 0;
    args
      .slice(0)
      .reverse()
      .forEach((val) => {
        list.insertFirst(val, count--);
      });
    return list;
  }
}
