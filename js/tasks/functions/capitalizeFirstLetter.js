
// ============ CAPITALIZE FIRST LETTER ============

/*
* Написать функцию, принимающую на вход строку и возвращающую эту же строку с 1-й буквой в верхнем регистре
* */

// ------- Solution I -------
// function capitalizeFirstLetter(string) {
//   return toString(string).[0].toUpperCase().slice(1);
// }

// console.log(capitalizeFirstLetter('ukraine'));


// ------- Solution II -------
function capitalizeFirstLetter(string) {
  const transformToArray = string.split('');
  transformToArray[0] = transformToArray[0].toUpperCase();

  return transformToArray.join('');
}

  // console.log(capitalizeFirstLetter('ukraine'));

