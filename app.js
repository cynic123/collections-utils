const { SingleLinkedList, DoubleLinkedList } = require("./dist");

let list = SingleLinkedList.create(1, 2, 3, 4, 5, 6);
console.log('--------------------------------------------------------');
console.log('Current list:', list.print());
console.log('Middle node:', list.middleNode().show);
console.log('Node at index 4:', list.nodeAt(4).show);
console.log('List size:', list.size);
console.log('Array:', list.toArray());
console.log('--------------------------------------------------------');
list.reverse();
console.log('List reversed...');
console.log('Current list:', list.print());
console.log('Middle node:', list.middleNode().show);
console.log('Node at index 2:', list.nodeAt(2).show);
console.log('List size:', list.size);
console.log('Array:', list.toArray());
console.log('--------------------------------------------------------');
let list1 = SingleLinkedList.create(1, 2, 3, 4, 5);
console.log('Another list:', list1.print());
console.log(list1.equals(list));
console.log('Adding new element to list');
list1.insertAt(2, 6);
console.log(list1.print());
console.log('--------------------------------------------------------');
let palindromeList = SingleLinkedList.create(1, 2, 3, 2, 1);
console.log('Creating new singly list:', palindromeList.print());
console.log('Palindrome:', palindromeList.palindrome());
console.log('--------------------------------------------------------');
let dList = DoubleLinkedList.create(1, 2, 3, 4, 3, 2, 1);
console.log('Creating new doubly list:', dList.print());
dList.reverse();
console.log('Reversed doubly list:', dList.print());
console.log('Palindrome:', dList.palindrome());
dList.insertAt(2, 5);
console.log(dList.print());
dList.deleteAt(2);
console.log(dList.print());
console.log('--------------------------------------------------------');
console.log(palindromeList.print());
palindromeList.deleteAt(2);
console.log(palindromeList.print());
