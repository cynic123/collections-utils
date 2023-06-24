"use strict";
/**
 * @author Prithwish Samanta
 * a singly linked list implementation with utility methods
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const console_1 = require("console");
/**
 * Node class with value, next (next node reference) and index of the node, when added in a LinkedList instance.
 */
class Node {
    constructor(value, next, index) {
        this._value = value;
        this._next = next;
        this._index = index;
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
        this._tail = null;
        this._size = 0;
    }
    get head() {
        return this._head;
    }
    get size() {
        return this._size;
    }
    /**
     * private method which inserts at the beginning
     * @param data
     */
    insertFirst(data, index) {
        let currHead = this._head;
        let newNode = new Node(data, currHead, index);
        this._head = newNode;
        if (!currHead)
            this._tail = newNode;
        this._size++;
    }
    /**
     * private method which inserts at the end
     * @param data
     * @param index
     */
    insertLast(data, index) {
        let currTail = this._tail;
        let newNode = new Node(data, null, index);
        this._tail = newNode;
        if (!currTail) {
            this._head = newNode;
        }
        else {
            currTail.next = newNode;
        }
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
        s = s.length > 0 ? s.concat('null') : 'empty';
        return s;
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
    nodeAt(index) {
        if (index < 0 || index >= this._size) {
            throw (0, console_1.error)('Invalid index!');
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
    toArray() {
        let current = this._head;
        let arr = [];
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
    subList(start, end) {
        var _a;
        if (start < 0 || end > this._size || start > end) {
            throw (0, console_1.error)('Invalid range indices!');
        }
        if (start == end) {
            return LinkedList.create((_a = this.nodeAt(start)) === null || _a === void 0 ? void 0 : _a.value);
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
     * @param  {...any} args variable number of elements to be added to the list
     * @returns an instance of the LinkedList class, with arguments passed being represented as nodes in a sequential order
     */
    static create(...args) {
        let list = new LinkedList();
        let count = args ? args.length - 1 : 0;
        args.slice(0).reverse().forEach(val => {
            list.insertFirst(val, count--);
        });
        return list;
    }
}
exports.LinkedList = LinkedList;
