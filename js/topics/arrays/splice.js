
// ============ HOW WORK SPLICE ============
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// console.log('all moths', months);

// ------- Solution 1.1 -------
const spring = months.splice(2, 3);
// console.log('spring', spring);
// console.log('all moths', months);



const summer = months.splice(2, 3);
// console.log('summer', summer);
// console.log('all moths', months);


const example = months.splice(2, 3, 'Padolyst');
// console.log('example', example);
// console.log('all moths', months);

