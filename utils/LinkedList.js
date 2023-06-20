class Node {
    #value;
    #next;
    constructor(value) {
        this.#value = value;
        this.#next = null;
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

    get show() {
        return { value: this.#value, next: this.#next != null ? this.#next.show : null}
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

    //inserts at head
    #insert(data) {
        let newNode = new Node(data);
        console.log(newNode.show);
        newNode.next = this.#head;
        this.#head = newNode;
        this.#size++;
    }

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

    reverse() {
        let temp = null;
        let current = this.#head;
        while (current) {
            let next = current.next;
            current.next = temp;
            temp = current;
            current = next;
        }
        this.#head = temp;
    }

    middle() {
        let slow = this.#head;
        let fast = this.#head;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    //accepts variable number of elements in order of arguments to create the linked list
    static create(...args) {
        let list = new LinkedList();
        args.slice(0).reverse().forEach(val => {
            list.#insert(val);
        });
        return list;
    }
}

module.exports = { LinkedList }
