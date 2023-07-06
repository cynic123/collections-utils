/**
 * @author Prithwish Samanta
 */

import { error } from "console";
import LinkedList from "../abstract/LinkedList";
import ListNode from "../../node/ListNode";

/**
 * A doubly linked list implementation of {@link LinkedList} class, with each node having references to both preceding and
 * following nodes
 */
export default class DoubleLinkedList<T> extends LinkedList<T> {
  constructor() {
    super();
  }

  /**
   * method which inserts the given data at the beginning
   * @param data
   */
  protected insertFirst(data: T): void {
    const currHead = this._head;
    const newNode = new ListNode(data, currHead, 0);
    this._head = newNode;
    if (!currHead) this._tail = newNode;
    else currHead.prev = newNode;
    let current = this._head.next;
    while (current) {
      current.index++;
      current = current.next;
    }
    this._size++;
  }

  /**
   * method which inserts the given data at the end
   * @param data
   * @param index
   */
  protected insertLast(data: T): void {
    const currTail = this._tail;
    const newNode = new ListNode(data, null, this.size, currTail);
    this._tail = newNode;
    if (!currTail) {
      this._head = newNode;
    } else {
      currTail.next = newNode;
    }
    this._size++;
  }

  /**
   * @param index index at which the given element to be inserted
   * @param data data element to be inserted
   * @throws ListIndexOutOfBoundsError if the specified index is less than starting index and greater than end index
   */
  insertAt(index: number, data: T): void {
    if (index < 0 || index > this.size - 1) throw error("Invalid index!");
    if (index === 0) return this.insertFirst(data);
    else if (index === this._size - 1) return this.insertLast(data);
    else {
      let current: ListNode<T> | any = this._head;
      while (current && current.index < index - 1) {
        current = current.next;
      }
      const temp = new ListNode(
        data,
        current.next,
        current.index + 1,
        current
      );
      current.next = temp;
      current = current.next.next;
      while (current) {
        current.index = current.index + 1;
        current = current.next;
      }
      this._size++;
    }
  }

  /**
   * @returns the value of the first element after removing it from the list, returns null if the list is empty
   */
  deleteFirst(): T | null {
    const head = this._head;
    if (!this.isEmpty()) {
      this._head = this._head ? this._head.next : null;
      if (this._head) {
        this._head.prev = null;
      } else {
        // current list is empty after removing head
        this._tail = null;
      }
      this._size--;
    }
    return head ? head.value : null;
  }

  /**
   * @returns the value of the last element after removing it from the list, returns null if the list is empty
   */
  deleteLast(): T | null {
    const tail = this._tail;
    if (!this.isEmpty()) {
      this._tail = this._tail ? this._tail.prev : null;
      if (this._tail) {
        this._tail.next = null;
      } else {
        // current list is empty after removing tail
        this._head = null;
      }
      this._size--;
    }
    return tail ? tail.value : null;
  }

  /**
   * @param data the element to be deleted from the list
   * @returns the value of the provided element after removing it from the list, if the list is empty or element is not
   * present, returns null
   */
  delete(data: T): T | null {
    // todo
    return null;
  }

  /**
   * @param index the index of the element in the list to delete
   * @returns the value of the element deleted at the specified index. If index not in range, or element is
   * @throws ListIndexOutOfBoundsError if the specified index is less than starting index and greater than end index
   */
  deleteAt(index: number): T | null {
    // todo
    return null;
  }

  /**
   * reverses the list on which the method is called upon
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
   * @returns returns a new instance of {@link DoubleLinkedList} class containing the nodes from the start index to the end
   * index (both inclusive) of the original list
   */
  subList(start: number, end: number): LinkedList<T | any> {
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
    while (current && current.index <= end) {
      list.insertLast(current.value);
      current = current.next;
    }
    return list;
  }

  /**
   * @param  {...any} args variable number of elements to be added to the list
   * @returns an instance of the {@link DoubleLinkedList} class, having nodes of {@link ListNode} instances added in a
   * sequential order
   */
  static create(...args: any[]): LinkedList<any> {
    const list = new DoubleLinkedList();
    args
      .slice(0)
      .reverse()
      .forEach((val) => {
        list.insertFirst(val);
      });
    return list;
  }
}
