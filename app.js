const { default: DoubleLinkedList } = require("./dist/DoubleLinkedList");
const { default: SingleLinkedList } = require("./dist/SingleLinkedList");

let list = SingleLinkedList.create(1, 2, 3, 4, 5, 6);
console.log('--------------------------------------------------------');
console.log('Current list:', list.print());
console.log('Middle node:', list.middle().show);
console.log('Node at index 4:', list.nodeAt(4).show);
console.log('List size:', list.size);
console.log('Array:', list.toArray());
console.log('--------------------------------------------------------');
list.reverse();
console.log('List reversed...');
console.log('Current list:', list.print());
console.log('Middle node:', list.middle().show);
console.log('Node at index 2:', list.nodeAt(2).show);
console.log('List size:', list.size);
console.log('Array:', list.toArray());
console.log('--------------------------------------------------------');
let list1 = SingleLinkedList.create(1, 2, 3, 4, 5);
console.log('Another list:', list1.print());
console.log(list1.equals(list));
console.log('--------------------------------------------------------');
let palindromeList = SingleLinkedList.create(1, 2, 3, 2, 1);
console.log('Creating new singly list:', palindromeList.print());
console.log('Palindrome:', palindromeList.palindrome());
console.log('--------------------------------------------------------');
let dList = DoubleLinkedList.create(1, 2, 3, 4, 5, 2, 1);
console.log('Creating new doubly list:', dList.print());
dList.reverse();
console.log('Reversed doubly list:', dList.print());
console.log('Palindrome:', dList.palindrome());
