// ============ HOW WORK SOME ============

const users = [
  { id: 'fe34', permissions: ['read', 'write'], },
  { id: 'a198', permissions: [], },
  { id: '18aa', permissions: ['delete', 'read', 'write'], }
];

const operatives = [
  { id: 12, name: 'Baze Malbus', pilot: false },
  { id: 44, name: 'Bodhi Rook', pilot: true },
  { id: 59, name: 'Chirrut Îmwe', pilot: false },
  { id: 122, name: 'Jyn Erso', pilot: false }
];

// -------------- Case 1.1 --------------

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



// -------------- Case 1.2 --------------

const hasDeletePermission = users.some(user => user.permissions.includes('delete'))

// console.log(hasDeletePermission)


