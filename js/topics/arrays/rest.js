
// ============ REST ============

// ------- Example I -------
function average(...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length
}
// console.log(average(10, 20, 30, 40, 50));


// ------- Example II -------
let log = function(a, b, ...rest) {
    // console.log(a, b, rest);
}
log('Basic', 'rest', 'operator', 'usage', 'user', 'admin');
// console.log('log', log);


// ------- Example III -------
let log2 = function(a, ...args) {
    // console.log(a, args);
}
log2(1, 2, 3, 4, 5);
// console.log('log2', log2);
