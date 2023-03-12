/*
* ReturnType - дозволяє отримати тип значення, що повернула функція
* ReturnType - позволяет вернуть тип возвращаемого функцией значения
*
* Type ReturnType частіше всього використовується із кодом у якого явно не прописані значення, що повертаюсться, або в якого взагалі немає типів.
* Використовувати власноручно в із кодом написаним на TypeScript доводиться доволі рідко, оскільки самим можно визначити типи значень, що повертають функції.
* */


// ========= Example 1.1 =========

function getInt(n: string) {
  return parseInt(n);
}

type Result = ReturnType<typeof getInt>

// ========= Example 1.2 =========

function createTask() {
  return ({
    id: 1,
    text: 'Text',
  })
}

type CreateTaskResult = ReturnType<typeof createTask>




