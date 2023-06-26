/**
 * @author Prithwish Samanta
 * a singly linked list implementation with utility methods
 */
/**
 * Node class with value, next (next node reference) and index of the node, when added in a LinkedList instance.
 */
declare class Node<T> {
    private _value;
    private _next;
    private _index;
    constructor(value: T, next: Node<T> | null, index: number);
    get value(): T | any;
    set value(v: T | any);
    get next(): Node<T> | null;
    set next(node: Node<T> | null);
    get index(): number;
    set index(v: number);
    get show(): Object;
}
/**
 * Linked List class containing head, size and other utility methods to be operated on an instance of the LinkedList class
 */
export declare class LinkedList<T> {
    private _head;
    private _tail;
    private _size;
    constructor();
    private get head();
    get size(): number;
    /**
     * private method which inserts the given data at the beginning
     * @param data
     */
    private insertFirst;
    /**
     * private method which inserts the given data at the end
     * @param data
     * @param index
     */
    private insertLast;
    /**
     *
     * @param data data element to be inserted
     * @param index index at which the given element to be inserted
     */
    insertAt(data: T, index: number): void;
    /**
     * prints the list
     */
    print(): String;
    /**
     * reverses the list
     */
    reverse(): void;
    /**
     *
     * @returns middle node of the list
     */
    middle(): Node<T> | null;
    /**
     *
     * @param index
     * @returns node at the specified index
     */
    nodeAt(index: number): Node<T> | null;
    /**
     *
     * @returns returns a new array containing the elements of linked list in their original order
     */
    toArray(): Array<number> | null;
    /**
     *
     * @param start
     * @param end
     * @returns returns a new list containing the nodes from the start index to the end index (both inclusive) of the original list
     */
    subList(start: number, end: number): LinkedList<T>;
    /**
     *
     * @param other other list to compare to
     * @returns if the referred to list and the other list passed as argument as same in size and values
     */
    equals(other: LinkedList<T>): boolean;
    /**
     *
     * @returns if the list is a palindrome
     */
    palindrome(): boolean;
    /**
     *
     * @param  {...any} args variable number of elements to be added to the list
     * @returns an instance of the LinkedList class, with arguments passed being represented as nodes in a sequential order
     */
    static create(...args: any[]): LinkedList<any>;
}
export {};
