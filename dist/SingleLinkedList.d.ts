/**
 * @author Prithwish Samanta
 * a singly linked list implementation of abstract class LinkedList
 */
import { Node } from "./Node";
import { LinkedList } from "./LinkedList";
/**
 * Linked List class containing head, size and other utility methods to be operated on an instance of the LinkedList class
 */
export declare class SingleLinkedList<T> extends LinkedList<T> {
    constructor();
    get head(): Node<T> | null;
    /**
     * private method which inserts the given data at the beginning
     * @param data
     */
    protected insertFirst(data: T, index: number): void;
    /**
     * private method which inserts the given data at the end
     * @param data
     * @param index
     */
    protected insertLast(data: T, index: number): void;
    /**
     *
     * @param data data element to be inserted
     * @param index index at which the given element to be inserted
     */
    insertAt(data: T, index: number): void;
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
     * @param  {...any} args variable number of elements to be added to the list
     * @returns an instance of the LinkedList class, with arguments passed being represented as nodes in a sequential order
     */
    static create(...args: any[]): LinkedList<any>;
}
