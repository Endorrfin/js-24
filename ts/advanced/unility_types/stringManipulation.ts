/*
* string manipulation
* Uppercase
* Lowercase
* Capitalize
* Uncapitalize
*
* Зручно використовувати ці утиліти для конструювання нових сутностей із уже існуючих типів.
* */


// ========= Example 1.1 =========
type Name1 = Uppercase<'name'>
type Name2 = Lowercase<'name'>
type Name3 = Capitalize<'name'>
type Name4 = Uncapitalize<'Name'>


// ========= Example 1.2 =========
type User = typeof user;

type WithGetters<T extends string> = Record<`get${Capitalize<T>}`, () => string>

const user = {
  name: 'John',
  age: 40
}

declare function createGetters(u: User): User & WithGetters<keyof User>

const userWithGetters = createGetters(user);


userWithGetters.getName()
userWithGetters.getAge()





