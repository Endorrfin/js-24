
// ============ CASE I ============

function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}

  // console.log(isEven(50)); // → true
  // console.log(isEven(75)); // → false
  // console.log(isEven(-1)); // → false



// ============ CASE II - GET TREE VALUES USING STACK ============

const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 3 },
            ]
        },
        {
            value: 4,
            children: [
                { value: 5 },
                { value: 6 },
            ]
        }
    ]
};

function getTreeValues (tree) {
    // debugger;
    const stack = [tree];
    const result = [];
    while(stack.length > 0) {
        const node = stack.pop();

        if (node.value !== undefined) {
            result.push(node.value)
        }

        if (node.children?.length) {
            stack.push(...node.children)
        }
    }

    return result
}

// console.log(getTreeValues(tree))
