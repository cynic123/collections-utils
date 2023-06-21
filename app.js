const { LinkedList } = require("./utils/LinkedList");

let list = LinkedList.create(1, 2, 3, 4, 5, 6);
console.log('--------------------------------------------------------');
console.log('head:', list.head.show);
list.print();
console.log('Middle node:', list.middle().show);
console.log('Node at index 4:', list.getNode(4).show);
console.log('List size:', list.size);
console.log('Array:', list.toArray());
console.log('--------------------------------------------------------');
list.reverse();
console.log('list reversed...');
console.log('head:', list.head.show);
list.print();
console.log('Middle node:', list.middle().show);
console.log('Node at index 2:', list.getNode(2).show);
console.log('List size:', list.size);
console.log('Array:', list.toArray());