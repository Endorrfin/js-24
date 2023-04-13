
/*
* Є функція, вона в логі виводить аргументи, що передаються в цю функцію.
* Потрібно реалізувати функцію, яка поверне, яка поверне нову фукнцію із тими ж аргументами, але із затримкою delay, яку ми передамо.
* const someFnWithDelay = someFn.delay()
* */

function someFn () {
  console.log(arguments);
}

// someFn('arg1', 2, []);



// ------- Solution 1.1 -------
Function.prototype.delay = function(delay) {
  return function(...args) {
    setTimeout(() => {
      this(...args);
    }, delay)
  }.bind(this);
};


const someFnDelay = someFn.delay(2000);

// someFnDelay(1, 2, 3, 4, 5, 6, 7);


// ------- Solution 1.2 -------
Function.prototype.delay = function(delay) {
  return (...args) => {
    setTimeout(() => {
      this(...args);
    }, delay)
  }
};


const someFnDelayArrow = someFn.delay(5000);

// someFnDelayArrow('arg2', 1, 2, 3, 4, 5, []);