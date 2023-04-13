// ============ FIND SUM ALL VALUES ============

const binaryTree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: {
        value: 4,
        left: {
          value: 5,
        }
      },
      right: {
        value: 6,
      }
    }
  },
  right: {
    value: 7,
    left: {
      value: 8,
      right: {
        value: 9,
        right: {
          value: 10,
          right: {
            value: 11,
          }
        }
      }
    },
    right: {
      value: 4,
    }
  }
};


const binaryTreeTwo = {};


// ------- SOLUTION 1.1 -------
function sumTree(tree) {
  let sum = tree.value ? tree.value : 0;
  if(tree.left) {
    sum += sumTree(tree.left)
  };
  if(tree.right) {
    sum += sumTree(tree.right)
  }
  return sum;
};


// console.log(sumTree(binaryTree));
// console.log(sumTree(binaryTreeTwo));


