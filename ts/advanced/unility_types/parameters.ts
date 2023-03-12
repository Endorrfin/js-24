/*
* Parameters - дозволяє отримати типи параметрів функції
*
* ConstructorParameters - дозволяє отримати тип данних із аргументів конструктора.
* */


// ========= Example 1.1 =========

function getInt(n: string) {
  return parseInt(n);
}


type InputOne = Parameters<typeof getInt>


// ========= Example 1.2 =========
class Person {
  constructor(
      public name: string,
      public surname: string,
      public age: number,
  ) {
  }
}

type InputTwo = ConstructorParameters<typeof Person>




