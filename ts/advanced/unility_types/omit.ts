/*
* Omit - исключает поля из базового типа, на основе оставшихся полей создается новый тип.
* Omit - призначений для фільтрації ключів обʼєкта, поля яких необхідно виключити.
*
* generic Pick приймає 2 параметри:
*   1. обʼєкт з якого потрібно буде вибирати поля
*   2. список полів, які необхідно вибрати
* */


type FullProfile = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  birthday: string;
  createAt: string;
};


// ========= Solution 1.1 =========
type EditableProfileFields = Omit<FullProfile, 'id' | 'createAt'>;


// ========= Example 2.1 =========
type UserSchemaType = {
  id: number;
  username: string;
  email: string;
  bio: string;
  image: string;
  hash: string;
  salt: string;
}

type PublickUserFilds = Omit<UserSchemaType, 'hash' | 'salt'>

/*
* Таким чином із допомогою "Omit" PublickUserFilds буде мати всі поля, крім тих, які були віключені другим аргументом, а саме: hash, salt.
* Замість того, щоб створювати руками обʼєкт, прописувати потрібні поля та в результаті мати 2 інтерфейси замість одного.
* */






