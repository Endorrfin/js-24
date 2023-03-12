/*
* Extract - здатний вирахувати спільні для двох типів признаки
* Extract - також можна застосувати для вирахування спільних полів між 2-ма різними типами чи інтерфейсами.
*
* Exclude приймає 2 параметри:
*   1. передає який-небудь тип
*   2. предає поля, які потрібно виключити
* */


// ========= Example 1.1 =========

type Intersection = Extract<'id' | 'name', 'name'> // Результатом буде name, оскільки він є і в 1-му типі і в 2-му.


// ========= Example 1.2 =========

type Task = {
  id: number;
  text: string;
  isCompleted?: boolean;
  completedDate?: Date | undefined;
}

type UserSchemaType = {
  id: number;
  username: string;
  email: string;
  bio: string;
  image: string;
  hash: string;
  salt: string;
}

type I = Extract<keyof Task, keyof UserSchemaType> // return id field, because this field intersection both type



