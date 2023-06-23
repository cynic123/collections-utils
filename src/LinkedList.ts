/**
 * @author Prithwish Samanta
 * a singly linked list implementation with utility methods
 */

/**
 * Node class with value, next (next node reference) and index of the node, when added in a LinkedList instance. 
 */
class Node<T> {
    private _value: T | any;
    private _next: Node<T> | null;
    private _index: number | null;

    constructor(value: T) {
        this._value = value;
        this._next = null;
        this._index = null;
    }

    get value(): T | any {
        return this._value;
    }

    set value(v: T | any) {
        this._value = v;
    }

    get next(): Node<T> | null {
        return this._next;
    }

    set next(node: Node<T> | null) {
        this._next = node;
    }

    get index(): number | any {
        return this._index;
    }

    set index(v: number | any) {
        this._index = v;
    }

    get show(): Object {
        return { value: this._value, index: this._index, next: this._next != null ? this._next.show : null };
    }

}

/**
 * Linked List class containing head, size and other utility methods to be operated on an instance of the LinkedList class
 */
export class LinkedList<T>{
    private _head: Node<T> | null;
    private _size: number;

    constructor() {
        this._head = null;
        this._size = 0;
    }

    get head(): Node<T> | null {
        return this._head;
    }

    get size(): number {
        return this._size;
    }

    /**
     * private method which inserts at head
     * @param data 
     */
    private insert(data: T, index: number): void {
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
    public print(): void {
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
    public reverse(): void {
        let temp: null | Node<T> = null;
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
    public middle(): Node<T> | null {
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
    public getNode(index: number): Node<T> | null {
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
    public toArray(): Array<number> | null {
        let current: Node<T> | null = this._head;
        let arr: number[] = [];
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
    static create(...args: any[]): LinkedList<any> {
        let list = new LinkedList();
        let count: number = args? args.length - 1 : 0;
        args.slice(0).reverse().forEach(val => {
            list.insert(val, count--);
        });
        return list;
    }
}