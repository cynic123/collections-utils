/**
 * @author Prithwish Samanta
 * a singly linked list implementation of abstract class LinkedList
 */
import Node from "./Node";
/**
 * An abstract class with constructor and utility methods for regular operations on a linked list. Abstract methods
 * have be defined in the implementating classes. Can be implemented as any form of linked lists.
 */
export default abstract class LinkedList<T> {
    protected _head: Node<T> | null;
    protected _tail: Node<T> | null;
    protected _size: number;
    protected constructor();
    protected get head(): Node<T> | null;
    protected get size(): number;
    /**
     * method which inserts the given data at the beginning
     * @param data
     */
    protected abstract insertFirst(data: T, index: number): void;
    /**
     * method which inserts the given data at the end
     * @param data
     * @param index
     */
    protected abstract insertLast(data: T, index: number): void;
    /**
     *
     * @param data data element to be inserted
     * @param index index at which the given element to be inserted
     */
    protected abstract insertAt(data: T, index: number): void;
    /**
     * reverses the list
     */
    abstract reverse(): void;
    /**
     *
     * @param start
     * @param end
     * @returns returns a new list containing the nodes from the start index to the end index (both inclusive) of the original list
     */
    protected abstract subList(start: number, end: number): LinkedList<T>;
    /**
     *
     * @returns the value of the head element of the list if present, otherwise undefined
     */
    getFirst(): T | any;
    /**
     *
     * @returns the value of the tail element of the list if present, otherwise undefined
     */
    getLast(): T | any;
    /**
     * prints the list
     */
    print(): string;
    /**
     *
     * @returns middle node of the list
     */
    protected middle(): Node<T> | null;
    /**
     *
     * @param index
     * @returns node at the specified index
     */
    protected nodeAt(index: number): Node<T> | null;
    /**
     *
     * @returns returns a new array containing the elements of linked list in their original order
     */
    toArray(): number[] | null;
    /**
     *
     * @param other other list to compare to
     * @returns if the referred to list and the other list passed as argument as same in size and values
     */
    equals(other: LinkedList<T>): boolean;
    /**
     *
     * @returns true if the list is a palindrome, else false
     */
    palindrome(): boolean;
}
