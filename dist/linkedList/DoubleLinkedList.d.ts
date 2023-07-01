/**
 * @author Prithwish Samanta
 * a doubly linked list implementation of abstract class LinkedList
 */
import LinkedList from "./LinkedList";
/**
 * A doubly linked list implementation of LinkedList class, with each node having references to both preceding and following
 * nodes
 */
export default class DoubleLinkedList<T> extends LinkedList<T> {
    constructor();
    /**
     * method which inserts the given data at the beginning
     * @param data
     */
    protected insertFirst(data: T, index: number): void;
    /**
     * method which inserts the given data at the end
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
     * @param start
     * @param end
     * @returns returns a new list containing the nodes from the start index to the end index (both inclusive) of the original list
     */
    subList(start: number, end: number): LinkedList<T>;
    /**
     *
     * @param  {...any} args variable number of elements to be added to the list
     * @returns an instance of the DoubleLinkedList class, with arguments passed being represented as nodes in a sequential order
     */
    static create(...args: any[]): LinkedList<any>;
}
