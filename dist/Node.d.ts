/**
 * @author Prithwish Samanta
 * a class which represents the basic element of a linked list.
 */
/**
 * Node class with value, next (next node reference) and index of the node, when added in a LinkedList instance.
 */
export declare class Node<T> {
    private _value;
    private _next;
    private _index;
    private _prev;
    constructor(value: T, next: Node<T> | null, index: number, prev?: Node<T> | null);
    get value(): T | any;
    set value(v: T | any);
    get next(): Node<T> | null;
    set next(node: Node<T> | null);
    get index(): number;
    set index(v: number);
    get prev(): Node<T> | null;
    set prev(node: Node<T> | null);
    get show(): Object;
}
