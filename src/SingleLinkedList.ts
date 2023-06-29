/**
 * @author Prithwish Samanta
 * a singly linked list implementation of abstract class LinkedList 
 */

import { error } from "console";
import { Node } from "./Node";
import { LinkedList } from "./LinkedList";

/**
 * A singly linked list implementation of LinkedList class, with each node having references to only the following node
 */
export class SingleLinkedList<T> extends LinkedList<T>{
    constructor() {
        super();
    }

    get head() {
        return this._head;
    }

    /**
     * method which inserts the given data at the beginning
     * @param data 
     */
    protected insertFirst(data: T, index: number): void {
        let currHead = this._head;
        let newNode = new Node(data, currHead, index);
        this._head = newNode;
        if (!currHead)
            this._tail = newNode;
        this._size++;
    }

    /**
     * method which inserts the given data at the end
     * @param data 
     * @param index 
     */
    protected insertLast(data: T, index: number): void {
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
     * reverses the list
     */
    reverse(): void {
        let prev = null;
        let current = this._head;
        this._tail = current;
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
     * @param start 
     * @param end 
     * @returns returns a new list containing the nodes from the start index to the end index (both inclusive) of the original list
     */
    subList(start: number, end: number): LinkedList<T> {
        if (start < 0 || end >= this._size || start > end) {
            throw error('Invalid range indices!');
        }
        if (start == end) {
            return SingleLinkedList.create(this.nodeAt(start)?.value);
        }
        let current = this._head;
        while (current && current.index < start) {
            current = current.next;
        }
        let list = new SingleLinkedList();
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
     * @returns an instance of the SingleLinkedList class, with arguments passed being represented as nodes in a sequential order
     */
    static create(...args: any[]): LinkedList<any> {
        let list = new SingleLinkedList();
        let count: number = args ? args.length - 1 : 0;
        args.slice(0).reverse().forEach(val => {
            list.insertFirst(val, count--);
        });
        return list;
    }
}