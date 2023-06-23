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
    constructor(value: T);
    get value(): T | any;
    set value(v: T | any);
    get next(): Node<T> | null;
    set next(node: Node<T> | null);
    get index(): number | any;
    set index(v: number | any);
    get show(): Object;
}
/**
 * Linked List class containing head, size and other utility methods to be operated on an instance of the LinkedList class
 */
export declare class LinkedList<T> {
    private _head;
    private _size;
    constructor();
    get head(): Node<T> | null;
    get size(): number;
    /**
     * private method which inserts at head
     * @param data
     */
    private insert;
    /**
     * prints the list
     */
    print(): void;
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
    getNode(index: number): Node<T> | null;
    /**
     *
     * @returns returns a new array containing the elements of linked list in their original order
     */
    toArray(): Array<number> | null;
    /**
     *
     * @param  {...any} args variabl number of elements to be added to the list
     * @returns an instance of the LinkedList class
     */
    static create(...args: any[]): LinkedList<any>;
}
export {};
