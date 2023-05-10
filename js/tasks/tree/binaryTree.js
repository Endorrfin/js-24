

// ------------ Case 1.1 - O(n * n) ------------

/*
Given the root of a binary tree and an integer targetSum,
return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
A leaf is a node with no children.

Є лише 2 варіанти обхода дерева:
1. DFC - пошук в глибину
2. BFC - пошук в ширину

* */



function maxPathSum(root) {
  let result = 0;
  if (root === null) return 0;
  let maxLeftPath = maxPathSum(root.left);
  let maxRightPath = maxPathSum(root.right);
  return Math.max(maxLeftPath, maxRightPath) + root.value;
}


// ------------ Case 1.2 - O(n * n) ------------
function hasPathSum (root, sum) {
  let res = false;

  function helper (node, currentSum) {
    if (!node || res) {
      return;
    }

    currentSum += node.val;

    if (!node.left && !node.right && currentSum === sum) {
      res = true;
    }

    helper(node.left, currentSum);
    helper(node.right, currentSum);
  }

  helper(root, 0);
  return res;
}





// ------------ Case 2.1 - O(n * n) ------------

/*
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them.
A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
The path sum of a path is the sum of the node's values in the path.
Given the root of a binary tree, return the maximum path sum of any non-empty path.

Example 1:
Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.


Example 2:
Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

Є лише 2 варіанти обхода дерева:
1. DFC - пошук в глибину
2. BFC - пошук в ширину

* */
// const treeNode2 = {
//   root: {
//     key: -10,
//     root2: {
//       key: 9,
//     }
//   }
// }
//
// function Solution () {
//   let answer = 0;
//   let maxPathSum2(root) {
//     helper(root)
//   }
// }
//
//
// function helper(node) {
//   if (node === null) return 0;
//   let maxLeftPath = Math.max(helper(node.left), 0);
//   let maxRightPath = Math.max(helper(node.right), 0);
//   // ...
//   answer = Math.max(answer, maxLeftPath + maxRightPath + node.value);
//   return Math.max(maxLeftPath, maxRightPath) + node.value;
// }


const maxPathSum2 = function(root) {
  let max = -Infinity;
  function dfs(root) {
    if(!root) return 0;

    let left = Math.max(0, dfs(root.left));
    let right = Math.max(0, dfs(root.right));
    let currentMax = left + root.value + right;

    max = Math.max(currentMax, max);

    return root.value + Math.max(left, right);
  }

  dfs(root);
  return max;
};
