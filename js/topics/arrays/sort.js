
// ============ SORT ============
/*
* Написать фукнцию сортировки любых объектов, по задаваемому параметру*/
const stock = [
    { name: 'MacBook', quantity: 11 },
    { name: 'Ipad', quantity: 3 },
    { name: 'Imac', quantity: 4 },
    { name: 'Iphone', quantity: 6 },
    { name: 'MacMini', quantity: 1 },
    { name: 'AirPods', quantity: 28 },
    { name: 'AirPort', quantity: 0 },
];

function sorted (data, type = 'asc') {
    return data.sort((a, b) => {
        switch (type) {
            case 'asc':
                return a.quantity - b.quantity;
                break;
            case 'desc':
                return b.quantity - a.quantity;
        }
    })
}

// console.log('sorted default (asc)', sorted(stock.slice()));
// console.log('sorted desc ', sorted(stock.slice(), 'desc'));

