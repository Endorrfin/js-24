
/*

Eсть 2 эндпоинты:
// USERS: https://jsonplaceholder.typicode.com/users
// POSTS: https://jsonplaceholder.typicode.com/posts

1. Позволяет получить список пользователей:
  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

2. Позволяет получить список постов.
  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

Необходимо используя только javascript получить данные из 2-х http запросов.
    Отрисовать в javascript список постов вместе с автором этих постов.
    В запроса постов есть id нет имени пользователя.
    В запросе пользователей есть id и есть username.
    Необходимо мапить (Map posts with author names) чтоб получить список постов вместе с его автором и отрисовать.
 */


// Отправляем два запроса и обрабатываем их
Promise.all([
  fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
  fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
])
    .then(([users, posts]) => {
      console.log('🙎‍♂️ USERS', users, '\n', '📝️ POSTS', posts);

      // Создаем Map для быстрого поиска имени по userId
      const usersMap = new Map();
      users.forEach(user => {
        usersMap.set(user.id, user.name);
      });
      console.log('🙋‍♂️ 🆔 USERS-MAP', usersMap);

      // NEW: Create user lookup map for O(1) access
      const userMap = new Map(users.map(user => [user.id, user.name]));
      console.log('🧓️ 🆔 USER-MAP', userMap);

      // Map posts with author names
      const postsWithAuthors = posts.map(post => ({
        ...post,
        authorName: usersMap.get(post.userId)
      }));

      console.log('🙎‍♂️ 📝️ POST WITH AUTHOR', postsWithAuthors)


      // Insert list of posts in DOM
      const container = document.getElementById('postsContainer');
      postsWithAuthors.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <p><strong>Author: </strong>${post.authorName}</p>
      <hr>
    `;
        container.appendChild(postElement);
      });
    })
    .catch(error => console.error(error));


