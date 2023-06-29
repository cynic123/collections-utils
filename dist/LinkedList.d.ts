import { Node } from "./Node";
/**
 * An abstract class with constructor and utility methods for regular operations on a linked list. Abstract methods
 * have be defined in the implementating classes. Can be implemented as any form of linked lists.
 */
export declare abstract class LinkedList<T> {
    protected _head: Node<T> | null;
    protected _tail: Node<T> | null;
    protected _size: number;
    protected constructor();
    protected get head(): Node<T> | null;
    protected get size(): number;
    /**
    * private method which inserts the given data at the beginning
    * @param data
    */
    protected abstract insertFirst(data: T, index: number): void;
    /**
    * private method which inserts the given data at the end
    * @param data
    * @param index
    */
    protected abstract insertLast(data: T, index: number): void;
    /**
     *
     * @param data data element to be inserted
     * @param index index at which the given element to be inserted
     */
    abstract insertAt(data: T, index: number): void;
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
    abstract subList(start: number, end: number): LinkedList<T>;
    /**
    * prints the list
    */
    print(): String;
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
     * @param other other list to compare to
     * @returns if the referred to list and the other list passed as argument as same in size and values
     */
    equals(other: LinkedList<T>): boolean;
    /**
     *
     * @returns if the list is a palindrome
     */
    palindrome(): boolean;
}
