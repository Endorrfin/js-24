/*
 * 👀 references
 * https://snyk.io/advisor/npm-package/object-assign/example
 * */


// -------------- Example 1.1 --------------
let widget = {
  color: 'red'
};

let clonedWidget = Object.assign({}, widget);

// console.log(clonedWidget);


// -------------- Example 1.2 --------------
let box = {
  height: 10, width: 20
};

let style = {
  color: 'Red', borderStyle: 'solid'
};

let styleBox = Object.assign({}, box, style);

// console.log(styleBox);


// -------------- Example 1.3 --------------
const course = {
  name: 'Web Programming'
};

const grade = {
  score: 92
}

const finalResult = Object.assign(course, grade, { teacher: 'Mrs Abby' });
// console.log(finalResult);


// -------------- Example 1.3 --------------
function printName(options) {
  const defaults = {
    firstName: 'Steve', lastName: 'Bottle'
  };

  options = Object.assign(defaults, options);

  // console.log(`${options.firstName} ${options.lastName}`);
}

printName({
  // firstName: 'Dom'
});


// -------------- Example 2.1 - Merging objects --------------
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

// const o4 = Object.assign(o1, o2, o3);
const o5 = Object.assign({}, o1, o2, o3);
const o6 = Object.assign({}, o1, o2, o3, { d: 4 } );

// console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
// console.log(o4); // { a: 1, b: 2, c: 3 }
// console.log(o5); // { a: 1, b: 2, c: 3 }
// console.log(o6); // { a: 1, b: 2, c: 3 }


// -------------- Example 2.1 - Merging objects with same properties --------------
const o11 = { a: 1, b: 1, c: 1 };
const o12 = { b: 2, c: 2 };
const o13 = { c: 3 };

const o14 = Object.assign({}, o11, o12, o13);
// console.log(o14); // { a: 1, b: 2, c: 3 }



// -------------- Example 2.2 - Properties on the prototype chain and non-enumerable properties cannot be copied --------------
const o21 = Object.create({ foo: 1 }, { // foo is on obj's prototype chain.
  bar: {
    value: 2  // bar is a non-enumerable property.
  },
  baz: {
    value: 3,
    enumerable: true  // baz is an own enumerable property.
  }
});

const copyO21 = Object.assign({}, o21);
// console.log(copyO21); // { baz: 3 };
