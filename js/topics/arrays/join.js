/*
  Используйте этот метод в том случае, если вам нужно создать строку, базируясь на элементах массива.
  Этот метод позволяет создать строку, соединив все элементы массива через указанный разделитель.
* */

const potentialParticipants = [
  { id: 'k38i', name: 'john', age: 17 },
  { id: 'baf3', name: 'mary', age: 13 },
  { id: 'a111', name: 'gary', age: 24 },
  { id: 'd111', name: 'emma', age: 15 },
  { id: 'c111', name: 'dilan', age: 29 },
  { id: 'fx34', name: 'emma', age: 34 },
];

// -------------- Case 1.1 --------------

const participantsFormatted = potentialParticipants
    .filter(user => user.age > 18)
    .map(user => user.name)
    .join(', ')

// console.log(participantsFormatted);



// -------------- Case 1.2 --------------




