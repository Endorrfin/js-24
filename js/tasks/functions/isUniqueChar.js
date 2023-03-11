// source: https://vladilen.notion.site/JavaScript-473541d86991472fb844c5fa35d5dbf4

/*
* Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы.
* Input: String
* Output: Boolean
* */

// ============ CHECKING A STRING FOR UNIQUE LETTERS (CHAR) ============

// -------------- Solution I --------------
function isUniqueString(str) {
  // todo
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false
    }
  }
  return true
}

// console.log('isUniqueString', isUniqueString('javascript'))
// console.log('isUniqueString', isUniqueString('python'))
// console.log('isUniqueString', isUniqueString('database'))
// console.log('isUniqueString', isUniqueString('coding'))


// -------------- Solution II --------------
function isUniqueChar(char) {
  // todo
  const chars = new Set()
  for (let i = 0; i < char.length; i++) {
    const current = char[i]

    if (chars.has(current)) {
      return false
    }
    chars.add(current)
  }

  return true
}

// console.log('isUniqueChar', isUniqueChar('word'))
// console.log('isUniqueChar', isUniqueChar('Mother'))
// console.log('isUniqueChar', isUniqueChar('behavior'))
// console.log('isUniqueChar', isUniqueChar('ukrainians'))



// -------------- Solution II --------------
function isUniqueCharOptimise(char) {
  // todo
  return new Set(char).size === char.length
}

// console.log('isUniqueCharOptimise', isUniqueCharOptimise('Madagascar'))
// console.log('isUniqueCharOptimise', isUniqueCharOptimise('Mother'))
// console.log('isUniqueCharOptimise', isUniqueCharOptimise('behavior'))
// console.log('isUniqueCharOptimise', isUniqueCharOptimise('ukrainians'))
