const { LinkedList } = require("./utils/LinkedList");

let list = LinkedList.create(1, 2, 3, 4, 5, 6);
console.log(list.head.show);
list.print();
console.log('Middle node:', list.middle().show);
list.reverse();
list.print();
console.log(list.middle().show);
console.log('List size:', list.size);