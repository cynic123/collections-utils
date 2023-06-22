"use strict";
/**
 * @author Prithwish Samanta
 * a singly linked list implementation with utility methods
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
/**
 * Node class with value, next (next node reference) and index of the node, when added in a LinkedList instance.
 */
class Node {
    constructor(value) {
        this._value = value;
        this._next = null;
        this._index = null;
    }
    get value() {
        return this._value;
    }
    set value(v) {
        this._value = v;
    }
    get next() {
        return this._next;
    }
    set next(node) {
        this._next = node;
    }
    get index() {
        return this._index;
    }
    set index(v) {
        this._index = v;
    }
    get show() {
        return { value: this._value, index: this._index, next: this._next != null ? this._next.show : null };
    }
}
/**
 * Linked List class containing head, size and other utility methods to be operated on an instance of the LinkedList class
 */
class LinkedList {
    constructor() {
        this._head = null;
        this._size = 0;
    }
    get head() {
        return this._head;
    }
    /**
     * private method which inserts at head
     * @param data
     */
    insert(data, index) {
        let newNode = new Node(data);
        console.log(newNode.show);
        newNode.next = this._head;
        newNode.index = index;
        this._head = newNode;
        this._size++;
    }
    /**
     * prints the list
     */
    print() {
        let s = '';
        let temp = this._head;
        while (temp) {
            s = s.concat(temp.value, ' -> ');
            temp = temp.next;
        }
        s = s.concat('null');
        console.log('Current list:', s);
    }
    /**
     * reverses the list
     */
    reverse() {
        let temp = null;
        let current = this._head;
        while (current) {
            let next = current.next;
            current.next = temp;
            temp = current;
            current.index = this._size - current.index - 1;
            current = next;
        }
        this._head = temp;
    }
    /**
     *
     * @returns middle node of the list
     */
    middle() {
        let slow = this._head;
        let fast = this._head;
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
    getNode(index) {
        if (index < 0 || index > this._size - 1) {
            throw console.error("Invalid index!");
        }
        let current = this._head;
        while (current != null && current.index != index) {
            current = current.next;
        }
        return current;
    }
    /**
     *
     * @returns returns a new array containing the elements of linked list in their original order
     */
    toArray() {
        let current = this._head;
        let arr = [];
        while (current != null) {
            arr[current.index] = current.value;
            current = current.next;
        }
        return arr;
    }
    /**
     *
     * @param  {...any} args variabl number of elements to be added to the list
     * @returns an instance of the LinkedList class
     */
    static create(...args) {
        let list = new LinkedList();
        let count = args ? args.length - 1 : 0;
        args.slice(0).reverse().forEach(val => {
            list.insert(val, count--);
        });
        return list;
    }
}
exports.LinkedList = LinkedList;
