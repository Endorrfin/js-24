// 🎯 #142. Linked List Cycle II

/*
🔗 Reference leetcode: https://leetcode.com/problems/linked-list-cycle-ii/description/
🔗 Reference set javascript: https://tc39.es/ecma262/#sec-set-iterable
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Example 2:
Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.

Example 3:
Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.

Constraints:
The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.

Follow up: Can you solve it using O(1) (i.e. constant) memory?

* */



// ✅ SOLUTION I
/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// ---- Generate linked list ----
const linkedList = [8,7,6,5,4,3,2,1].reduce((acc, val) => new ListNode(val, acc), null);

let curr = linkedList, cycleNode;
while(curr.next !== null) {
  if(curr.val === 3) {
    cycleNode = curr;
  }

  curr = curr.next;
}

curr.next = cycleNode;


// ---- Generate linked list ----
const findCycle = function(head) {
  if(!head) return null;

  let tortoise = head, hare = head;

  while(true) {
    tortoise = tortoise.next;
    hare = hare.next;

    if(hare === null || hare.next === null) {
      return null;
    } else {
      hare = hare.next;
    }

    if(tortoise === hare) break;
  }

  let p1 = head,
      p2 = tortoise;

  while(p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2
};

console.log('OUTPUT', findCycle(linkedList));




// ✅ SOLUTION II OPTIMAL
/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode2 {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// ---- Generate our linked list ----
const linkedList2 = [8,7,6,5,4,3,2,1].reduce((acc, val) => new ListNode2(val, acc), null);

let curr2 = linkedList2, cycleNode2;
while(curr2.next !== null) {
  if(curr2.val === 3) {
    cycleNode2 = curr2;
  }

  curr2 = curr2.next;
}

curr.next = cycleNode2;


// ---- Generate our linked list ----
const findCycle2 = function(head) {
  const seenNodes = new Set();
  let currentNode = head;

  while(!seenNodes.has(currentNode)) {
    if(currentNode.next === null) {
      return false;
    }

    seenNodes.add(currentNode);

    currentNode = currentNode.next;
  }

  return currentNode;
}

console.log(findCycle2(linkedList2));



