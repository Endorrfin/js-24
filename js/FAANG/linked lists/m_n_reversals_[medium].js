// 🎯 # 92. Reverse Linked List II

/*
🔗 Reference leetcode: https://leetcode.com/problems/reverse-linked-list-ii/description/
Given the head of a singly linked list and two integers left and right where left <= right,
reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:
Input: head = [5], left = 1, right = 1
Output: [5]

Constraints:
The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n

Follow up: Could you do it in one pass?
* */


/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);

// ---- Generate our linked list ----

const printList = (head) => {
  if(!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
}


// ✅ SOLUTION I
var reverseBetween = function(head, m, n) {
  let currentPos = 1, currentNode = head;
  let start = head;

  while(currentPos < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }

  let newList = null, tail = currentNode;

  while(currentPos >= m && currentPos <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPos++;
  }

  start.next = newList;
  tail.next = currentNode;

  if(m > 1) {
    return head
  } else {
    return newList;
  }
};

printList(linkedList);
console.log('after reverse');
printList(reverseBetween(linkedList, 2, 4));



