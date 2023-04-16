// ============ HOW WORK SOME ============

const operatives = [
  { id: 12, name: 'Baze Malbus', pilot: false },
  { id: 44, name: 'Bodhi Rook', pilot: true },
  { id: 59, name: 'Chirrut Îmwe', pilot: false },
  { id: 122, name: 'Jyn Erso', pilot: false }
];

// -------------- Example 1.1 case I --------------

let listHasPilots = false;
operatives.forEach(function (operative) {
  if (operative.pilot) {
    listHasPilots = true;
  }
});

// console.log('listHasPilots', listHasPilots);


const isPilots = operatives.some(function (operative) {
  return operative.pilot;
});
// console.log('isPilots', isPilots);


const isPilotsOptimize = operatives.some(operative => operative.pilot);
// console.log('isPilotsOptimize', isPilotsOptimize);




