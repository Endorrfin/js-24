// source: https://vladilen.notion.site/JavaScript-473541d86991472fb844c5fa35d5dbf4

/*
* Повернута ли строка?
* Напишите функцию, которая принимает 2 строки. Верните `true` если строки являются перевернутым вариантом друг друга (см. пример). Иначе верните `false`.
* Input: String, String
* Output: Boolean
* */

// ============ Is the string reversed? ============

// -------------- Solution 1.1 --------------
function isStringRotated(source, test) {
  // todo
  if (source.length !== test.length) {
    return false
  }

  for (let i = 0; i < source.length; i++) {
    const rotate = source.slice(i, source.length) + source.slice(0, i)

    if (rotate === test) {
      return true
    }
  }

  return false
}

// console.log(isStringRotated('javascript', 'scriptjava')) // -> true
// console.log(isStringRotated('javascript', 'iptjavascr')) // -> true
// console.log(isStringRotated('javascript', 'java')) // -> false



// -------------- Solution 1.2 --------------
function isStringReversed(source, test) {
  // todo
  return source.length === test.length && (source + source).includes(test)
}

// console.log(isStringReversed('javascript', 'scriptjava')) // -> true
// console.log(isStringReversed('javascript', 'iptjavascr')) // -> true
// console.log(isStringReversed('javascript', 'java')) // -> false