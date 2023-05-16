/*
  Метод fill() изменяет или полностью заполняет массив с начальной по конечную позиции.
  Отличное применение — это заполнение нового массива одним статическим значением.
* */

const nodes = document.querySelectorAll('.todo-item') // Это экземпляр NodeList

const todoItems = Array.from(nodes) // Теперь можно использовать привычные map, filter и т.п.

// -------------- Case 1.1 --------------

function fakeUser() {
  return {
    id: 'fake123',
    name: 'thomas',
  }
}

const posts = Array(7).fill(fakeUser());
// console.log(posts);



// -------------- Case 1.2 --------------




