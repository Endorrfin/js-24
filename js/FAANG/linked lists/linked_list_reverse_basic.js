// 🎯 #

/*
🔗 Reference leetcode:
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!

* */


class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}


// ---- Generate linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);


// ---- Generate linked list ----
const printList = (head) => {
  if(!head) {
    return;
  }

  console.log('🟡 Head.val', head.val);
  printList(head.next);
}


// ✅ SOLUTION
var reverseList = function(head) {
  let prev = null;
  let current = head;

  while(current) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }

  return prev;
};

printList(linkedList);
console.log('after reverse')
printList(reverseList(linkedList))



