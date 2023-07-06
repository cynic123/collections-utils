/**
 * @author Prithwish Samanta
 */

import { error } from "console";
import LinkedList from "../abstract/LinkedList";
import ListNode from "../../node/ListNode";

/**
 * A singly linked list implementation of {@link LinkedList} class, where each node are an instance of the {@link ListNode}
 * class, containing references to only the following node in the list
 */
export default class SingleLinkedList<T> extends LinkedList<T> {
  constructor() {
    super();
  }

  get head() {
    return this._head;
  }

  /**
   * inserts the given element at the beginning of the list
   * @param data
   */
  protected insertFirst(data: T): void {
    const currHead = this._head;
    const newNode = new ListNode(data, currHead, 0);
    this._head = newNode;
    if (!currHead) this._tail = newNode;
    let current = this._head.next;
    while (current) {
      current.index++;
      current = current.next;
    }
    this._size++;
  }

  /**
   * inserts the given element at the end of the list
   * @param data
   * @param index
   */
  protected insertLast(data: T): void {
    const currTail = this._tail;
    const newNode = new ListNode(data, null, this.size);
    this._tail = newNode;
    if (!currTail) {
      this._head = newNode;
    } else {
      currTail.next = newNode;
    }
    this._size++;
  }

  /**
   * inserts the given element at the provided index of the list
   * @param index index at which the given element to be inserted
   * @param data data element to be inserted
   * @throws ListIndexOutOfBoundsError if the specified index is less than starting index and greater than end index
   */
  insertAt(index: number, data: T): void {
    if (index < 0 || index > this.size - 1)
      throw error("ListIndexOutOfBoundsError");
    if (index === 0) return this.insertFirst(data);
    else if (index === this._size - 1) return this.insertLast(data);
    else {
      let current: ListNode<T> | any = this._head;
      while (current && current.index < index - 1) {
        current = current.next;
      }
      const temp = new ListNode(data, current.next, current.index + 1);
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
   * inserts the given element at the end of the list
   * @param data data element to be inserted
   */
  insert(data: T): void {
    this.insertLast(data);
  }

  /**
   * @returns the value of the first element after removing it from the list, returns null if the list is empty
   */
  deleteFirst(): T | null {
    const head = this._head;
    if (!this.isEmpty()) {
      this._head = head ? head.next : null;
      if (!this._head) {
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
      let current = this._head;
      let prev = null;
      while (current && current.next) {
        prev = current;
        current = current.next;
      }
      this._tail = prev;
      if (prev) prev.next = null;
      if (!this._tail) {
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
    let current = this._head;
    let prev = null;
    while (current) {
      if (current.value === data) {
        if (current.index === 0) return this.deleteFirst();
        else if (current.index === this.size - 1) return this.deleteLast();
        else {
          if (prev) prev.next = current.next;
          current.next = null;
          this._size--;
          return current.value;
        }
      }
      prev = current;
      current = current.next;
    }
    return null;
  }

  /**
   * @param index the index of the element in the list to delete
   * @returns the value of the element deleted at the specified index. If index not in range, or element is
   * @throws ListIndexOutOfBoundsError if the specified index is less than starting index and greater than end index
   */
  deleteAt(index: number): T | null {
    if (index < 0 || index > this._size - 1)
      throw error("ListIndexOutOfBoundsError");
    if (index === 0) return this.deleteFirst();
    else if (index === this._size - 1) return this.deleteLast();
    else {
      let current: ListNode<T> | any = this._head;
      while (current && current.index < index - 1) {
        current = current.next;
      }
      const deleteNode = current.next;
      current.next = deleteNode.next;
      deleteNode.next = null;
      this._size--;
      return deleteNode.value;
    }
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
   * @returns returns a new instance of {@link SingleLinkedList} class containing the nodes from the start index to the end
   * index (both inclusive) of the original list
   */
  subList(start: number, end: number): LinkedList<T | any> {
    if (start < 0 || end >= this._size || start > end) {
      throw error("Invalid range indices!");
    }
    if (start === end) {
      return SingleLinkedList.create(this.nodeAt(start)?.value);
    }
    let current = this._head;
    while (current && current.index < start) {
      current = current.next;
    }
    const list = new SingleLinkedList();
    while (current && current.index <= end) {
      list.insertLast(current.value);
      current = current.next;
    }
    return list;
  }

  /**
   * @param  {...any} args variable number of elements to be added to the list
   * @returns an instance of the {@link SingleLinkedList} class, having nodes of {@link ListNode} instances added in a
   * sequential order
   */
  static create(...args: any[]): LinkedList<any> {
    const list = new SingleLinkedList();
    args
      .slice(0)
      .reverse()
      .forEach((val) => {
        list.insertFirst(val);
      });
    return list;
  }
}
