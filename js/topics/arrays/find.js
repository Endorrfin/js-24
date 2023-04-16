// ============ HOW WORK FIND ============


// -------------- Example 1.1 case I --------------
const operatives = [
  { id: 12, name: 'Baze Malbus', pilot: false },
  { id: 44, name: 'Bodhi Rook', pilot: true },
  { id: 59, name: 'Chirrut Îmwe', pilot: false },
  { id: 37, name: 'Charl Forstmann', pilot: true },
  { id: 98, name: 'Jyn Erso', pilot: false }
];

const firstPilot = operatives.find(operative => operative.pilot);
// console.log('firstPilot', firstPilot);
