import { error } from "console";
import { Node } from "./Node";

/**
 * An abstract class with constructor and utility methods for regular operations on a linked list. Abstract methods
 * have be defined in the implementating classes. Can be implemented as any form of linked lists. 
 */
export abstract class LinkedList<T> {
    protected _head: Node<T> | null;
    protected _tail: Node<T> | null;
    protected _size: number;

    protected constructor() {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    protected get head(): Node<T> | null {
        return this._head;
    }

    protected get size(): number {
        return this._size;
    }

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
    print(): String {
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
     * 
     * @returns middle node of the list
     */
    middle(): Node<T> | null {
        let slow: Node<T> | any = this._head;
        let fast: Node<T> | any = this._head;
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
    nodeAt(index: number): Node<T> | null {
        if (index < 0 || index >= this._size) {
            throw error('Invalid index!');
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
    toArray(): Array<number> | null {
        let current: Node<T> | null = this._head;
        let arr: number[] = [];
        while (current) {
            arr[current.index] = current.value;
            current = current.next;
        }
        return arr;
    }

    /**
     * 
     * @param other other list to compare to
     * @returns if the referred to list and the other list passed as argument as same in size and values
     */
    equals(other: LinkedList<T>): boolean {
        let head1 = this._head;
        let head2 = other.head;
        while (head1 && head2) {
            if (head1.value !== head2.value) {
                return false;
            }
            head1 = head1.next;
            head2 = head2.next;
        }
        if (!head1 && !head2)
            return true;
        else return false;
    }

    /**
     * 
     * @returns if the list is a palindrome
     */
    palindrome(): boolean {
        if (!this._head || !this._head.next) {
            return true;
        }
        let mid = Math.floor(this.size / 2);
        let odd = this.size % 2 !== 0;
        let lList = this.subList(0, odd ? mid : mid - 1);
        let rList = this.subList(mid, this.size - 1);
        rList.reverse();
        return lList.equals(rList);
    }
}