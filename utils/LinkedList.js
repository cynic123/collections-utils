/**
 * @author Prithwish Samanta
 * a singly linked list implementation with utility methods
 */

/**
 * Node class with value, next (next node reference) and index of the node, when added in a LinkedList instance. 
 */

class Node {
    #value;
    #next;
    #index;
    constructor(value) {
        this.#value = value;
        this.#next = null;
        this.#index = null;
    }

    get value() {
        return this.#value;
    }

    get next() {
        return this.#next;
    }

    set next(val) {
        this.#next = val;
    }

    get index() {
        return this.#index;
    }

    set index(val) {
        this.#index = val;
    }

    get show() {
        return { value: this.#value, index: this.#index, next: this.#next != null ? this.#next.show : null}
    }
}

/**
 * Linked List class containing head, size and other utility methods to be operated on an instance of the LinkedList class
 */
class LinkedList {
    #head;
    #size;
    constructor() {
        this.#head = null;
        this.#size = 0;
    }

    get head() {
        return this.#head;
    }

    get size() {
        return this.#size;
    }

    /**
     * private method which inserts at head
     * @param data 
     */
    #insert(data, index) {
        let newNode = new Node(data);
        console.log(newNode.show);
        newNode.next = this.#head;
        newNode.index = index;
        this.#head = newNode;
        this.#size++;
    }

    /**
     * prints the list
     */
    print() {
        let s = '';
        let temp = this.#head;
        while (temp) {
            s = s.concat(temp.value, ' -> ');
            temp = temp.next;
        }
        s = s.concat(null);
        console.log('Current list:', s);
    }

    /**
     * reverses the list
     */
    reverse() {
        let temp = null;
        let current = this.#head;
        while (current) {
            let next = current.next;
            current.next = temp;
            temp = current;
            current.index = this.#size - current.index - 1;
            current = next;
        }
        this.#head = temp;
    }

    /**
     * 
     * @returns middle node of the list
     */
    middle() {
        let slow = this.#head;
        let fast = this.#head;
        while(fast && fast.next) {
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
    getNode(index) {
        if(index < 0 || index > this.#size - 1) {
            throw console.error("Invalid index");
        }
        let current = this.#head;
        while(current != null && current.index != index) {
            current = current.next;
        }
        return current;
    }

    /**
     * 
     * @returns returns a new array containing the elements of linked list in their original order
     */
    toArray() {
        let current = this.#head;
        let arr = [];
        while(current != null) {
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
    static create(...args) {
        let list = new LinkedList();
        let count = args? args.length - 1 : null;
        args.slice(0).reverse().forEach(val => {
            list.#insert(val, count--);
        });
        return list;
    }
}

module.exports = { LinkedList }
