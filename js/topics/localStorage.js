// ============ Local Storage ============

/*
* localStorage это свойство глобального объекта браузера (window). К нему можно обращаться как window.localStorage или просто localStorage.
* у браузера существует клон localStorage, который называется sessionStorage.
* sessionStorage хранит данные только для одной вкладки (сессии) и просто очистит свое пространство как только мы закроем вкладку
*
* Для каждого домена браузер создает свой объект localStorage, и редактировать или просматривать его можно только в рамках данного домена.
* Например, с домена mydomain-1.com нельзя получить доступ к localStorage вашего mydomain-2.com.
*
* Браузеры выделяют 5мб под localStorage.
* И если его превысить — получим исключение QUOTA_EXCEEDED_ERR.
* С его помощью можно проверять есть ли в localStorage еще место.
* */

// -------------- Methods localStorage --------------

// [1] adds a new key with value to localStorage, or replaces an existing key
localStorage.setItem('myKey', 'myValue');

// [2] Allows you to get a specific value from the localStorage by key.
localStorage.getItem('myKey');

// [3] Removing a key
// localStorage.removeItem('myKey');

// [4] Clearing all storage
// localStorage.clear();

let localValue = localStorage.getItem('myKey');
// console.log(localValue);



// ------- Example I -------
const myCar = {
  wheels: 4,
  doors: 4,
  engine: 1,
  name: 'Jaguar',
  info: ['produced', 2018, 'power', 230, 'isNew', false],
}


const serialObject = JSON.stringify(myCar);
localStorage.setItem('myCar', serialObject);

const getMyCar = JSON.parse(localStorage.getItem('myCar'));
// console.log(getMyCar);


// ------- Example II -------
try {
  localStorage.setItem('anotherKey', 'anotherValue');
} catch (e) {
  if (e === QUOTA_EXCEEDED_ERR) {
    alert('Limit is exceeded');
  }
}


// ------- Example III -------
// if(localStorage.regions) { loadRegions(JSON.parse(localStorage.regions));
//   localStorage.regions = JSON.stringify(..);}
