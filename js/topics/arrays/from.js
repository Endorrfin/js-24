/*
  Это статический метод, позволяющий создать новый массив из массиво-подобных и итерабельных объектов (строка).
  Метод полезен при работе с DOM.
* */

const nodes = document.querySelectorAll('.todo-item') // Это экземпляр NodeList

const todoItems = Array.from(nodes) // Теперь можно использовать привычные map, filter и т.п.

// -------------- Case 1.1 --------------

todoItems.forEach(item => {
  item.addEventListener('click', function() {
    alert(`Вы нажали на ${item.innerHTML}`)
  })
})



// -------------- Case 1.2 --------------




