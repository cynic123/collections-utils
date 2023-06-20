class TNode<T> {
    private _value: T | any;
    private _next: TNode<T> | null;

    constructor(value: T) {
        this._value = value;
        this._next = null;
    }

    get value(): T | any {
        return this._value;
    }

    set value(v: T | any) {
        this._value = v;
    }

    get next(): TNode<T> | null {
        return this._next;
    }

    set next(node: TNode<T> | null) {
        this._next = node;
    }

    get show(): Object {
        return { value: this._value, next: this._next != null ? this._next.show : null };
    }

}

class LinkedList<T>{
    private _head: TNode<T> | null;
    private _size: number;

    constructor() {
        this._head = null;
        this._size = 0;
    }

    //inserts at head
    private insert(data: T): void {
        let newNode = new TNode(data);
        console.log(newNode.show);
        newNode.next = this._head;
        this._head = newNode;
        this._size++;
    }

    print(): void {
        let s = '';
        let temp = this._head;
        while (temp) {
            s = s.concat(temp.value, ' -> ');
            temp = temp.next;
        }
        s = s.concat('null');
        console.log('Current list:', s);
    }

    reverse(): void {
        let temp: null | TNode<T> = null;
        let current = this._head;
        while (current) {
            let next = current.next;
            current.next = temp;
            temp = current;
            current = next;
        }
        this._head = temp;
    }
}