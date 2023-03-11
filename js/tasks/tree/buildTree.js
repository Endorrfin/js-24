/*
* There is a one-level array of objects.
* Create a tree that will display the parent-child hierarchy.
* */
const data = [
    {
        id: 1,
        name: 'test node1',
        parentNode: null,
        type: 3,
    },
    {
        id: 2,
        name: 'test node2',
        parentNode: null,
        type: 2,
    },
    {
        id: 3,
        name: 'test node3',
        parentNode: 1,
        type: 7,
    },
    {
        id: 4,
        name: 'test node4',
        parentNode: 1,
        type: 7,
    },
    {
        id: 5,
        name: 'test node5',
        parentNode: 4,
        type: 7,
    },
]

// STEP I - transform array of objects to objects
const hashTable = {};

data.forEach(item => (hashTable[item.id] = {...item, childNodes: []}));
// console.log('hashTable', hashTable);

const dataTree = [];
data.forEach((item) => {
    if (item.parentNode && hashTable[item.parentNode]) {
        hashTable[item.parentNode].childNodes.push(hashTable[item.id])
    } else {
        dataTree.push(hashTable[item.id])
    }
});

// console.log('dataTree', JSON.stringify(dataTree, null, 4));


// STEP II - build function
const makeDataTree = (dataset, id, parentNodeName, childNodeName) => {
    const hashTable = {};
    dataset.forEach(item => (hashTable[item[id]] = {...item, [childNodeName]: []}));

    const dataTree = [];
    dataset.forEach((item) => {
        if (item[parentNodeName] && hashTable[item[parentNodeName]]) {
            hashTable[item[parentNodeName]][childNodeName].push(hashTable[item[id]])
        } else {
            dataTree.push(hashTable[item[id]])
        }
    });

    return dataTree;
}

const result = makeDataTree(data, 'id', 'parentNode', 'childNodes');

// console.log('result', JSON.stringify(result, null, 4));




























