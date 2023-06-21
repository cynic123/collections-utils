/**
 * a singly linked list implementation
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

    //private method which inserts at head
    #insert(data, index) {
        let newNode = new Node(data);
        console.log(newNode.show);
        newNode.next = this.#head;
        newNode.index = index;
        this.#head = newNode;
        this.#size++;
    }

    //prints the list
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

    //reverses the list
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

    //fetches the middle node of the list
    middle() {
        let slow = this.#head;
        let fast = this.#head;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    //fetches the node at given index (index can be string or number)
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

    //returns a new array containing the elements of linked list in their original order
    toArray() {
        let current = this.#head;
        let arr = [];
        while(current != null) {
            arr[current.index] = current.value;
            current = current.next;
        }
        return arr;
    }

    //creates a linked list accepting variable number of arguments populated as elements, in the order of the arguments passed
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
