/**
 * @author Prithwish Samanta
 * a singly linked list implementation with utility methods
 */

import { error } from "console";

/**
 * Node class with value, next (next node reference) and index of the node, when added in a LinkedList instance. 
 */
class Node<T> {
    private _value: T | any;
    private _next: Node<T> | null;
    private _index: number;

    constructor(value: T, next: Node<T> | null, index: number) {
        this._value = value;
        this._next = next;
        this._index = index;
    }

    get value(): T | any {
        return this._value;
    }

    set value(v: T | any) {
        this._value = v;
    }

    get next(): Node<T> | null {
        return this._next;
    }

    set next(node: Node<T> | null) {
        this._next = node;
    }

    get index(): number {
        return this._index;
    }

    set index(v: number) {
        this._index = v;
    }

    get show(): Object {
        return { value: this._value, index: this._index, next: this._next != null ? this._next.show : null };
    }
}

/**
 * Linked List class containing head, size and other utility methods to be operated on an instance of the LinkedList class
 */
export class LinkedList<T>{
    private _head: Node<T> | null;
    private _tail: Node<T> | null;
    private _size: number;

    constructor() {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    private get head(): Node<T> | null {
        return this._head;
    }

    get size(): number {
        return this._size;
    }

    /**
     * private method which inserts the given data at the beginning
     * @param data 
     */
    private insertFirst(data: T, index: number): void {
        let currHead = this._head;
        let newNode = new Node(data, currHead, index);
        this._head = newNode;
        if (!currHead)
            this._tail = newNode;
        this._size++;
    }

    /**
     * private method which inserts the given data at the end
     * @param data 
     * @param index 
     */
    private insertLast(data: T, index: number): void {
        let currTail = this._tail;
        let newNode = new Node(data, null, index);
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
        if (index < 0 || index >= this._size)
            throw error('Invalid index!');
        let current: Node<T> | any = this._head;
        let prev: Node<T> | any = null;
        let currIndex = 0;
        while (current && currIndex < index) {
            prev = current;
            current = current.next;
            currIndex++;
        }
        let temp = new Node(data, current, currIndex);
        prev.next = temp;
        current = current.next;
        while (current) {
            current.index = current.index + 1;
            current = current.next;
        }
    }

    /**
     * prints the list
     */
    print(): String {
        let s = '';
        let temp = this._head;
        while (temp) {
            s = s.concat(temp.value, ' -> ');
            temp = temp.next;
        }
        s = s.length > 0 ? s.concat('null') : 'empty';
        return s;
    }

    /**
     * reverses the list
     */
    reverse(): void {
        let prev = null;
        let current = this._head;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current.index = this._size - current.index - 1;
            current = next;
        }
        this._head = prev;
    }

    /**
     * 
     * @returns middle node of the list
     */
    middle(): Node<T> | null {
        let slow: Node<T> | any = this._head;
        let fast: Node<T> | any = this._head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    /**
     * 
     * @param index 
     * @returns node at the specified index
     */
    nodeAt(index: number): Node<T> | null {
        if (index < 0 || index >= this._size) {
            throw error('Invalid index!');
        }
        let current = this._head;
        while (current && current.index != index) {
            current = current.next;
        }
        return current;
    }

    /**
     * 
     * @returns returns a new array containing the elements of linked list in their original order
     */
    toArray(): Array<number> | null {
        let current: Node<T> | null = this._head;
        let arr: number[] = [];
        while (current) {
            arr[current.index] = current.value;
            current = current.next;
        }
        return arr;
    }

    /**
     * 
     * @param start 
     * @param end 
     * @returns returns a new list containing the nodes from the start index to the end index (both inclusive) of the original list
     */
    subList(start: number, end: number): LinkedList<T> {
        if (start < 0 || end >= this._size || start > end) {
            throw error('Invalid range indices!');
        }
        if (start == end) {
            return LinkedList.create(this.nodeAt(start)?.value);
        }
        let current = this._head;
        while (current && current.index < start) {
            current = current.next;
        }
        let list = new LinkedList();
        let count = 0;
        while (current && current.index <= end) {
            list.insertLast(current.value, count++);
            current = current.next;
        }
        return list;
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
        if (!head1 && !head2)
            return true;
        else return false;

    }

    /**
     * 
     * @returns if the list is a palindrome
     */
    palindrome(): boolean {
        if (!this._head || !this._head.next) {
            return true;
        }
        let mid = this.size / 2;
        let lEnd = mid % 2 !== 0 ? mid - 1 : mid;
        let rStart = mid % 2 !== 0 ? mid + 1 : mid;
        let lList = this.subList(0, lEnd);
        let rList = this.subList(rStart, this.size - 1);
        rList.reverse();
        //todo
        return true;
    }

    /**
     * 
     * @param  {...any} args variable number of elements to be added to the list
     * @returns an instance of the LinkedList class, with arguments passed being represented as nodes in a sequential order
     */
    static create(...args: any[]): LinkedList<any> {
        let list = new LinkedList();
        let count: number = args ? args.length - 1 : 0;
        args.slice(0).reverse().forEach(val => {
            list.insertFirst(val, count--);
        });
        return list;
    }
}