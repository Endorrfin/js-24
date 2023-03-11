
// ------- Example I -------
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(array);

const [first, , third, , , , , , , ten, eleven = 11] = array;
// console.log('first', first, 'third', third, 'ten', ten, 'eleven', eleven);


// ------- Example II -------
let firstName = 'Bill';
let surName = 'Gets';

// console.log(firstName, surName);
[surName, firstName] = [firstName, surName];
// console.log(firstName, surName);








