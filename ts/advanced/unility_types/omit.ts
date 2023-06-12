/*
* Omit - исключает поля из базового типа, на основе оставшихся полей создается новый тип.
* Omit - призначений для фільтрації ключів обʼєкта, поля яких необхідно виключити.
*
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

type PublicUserFields = Omit<UserSchemaType, 'hash' | 'salt'>

/*
* Таким чином із допомогою "Omit" PublicUserFields буде мати всі поля, крім тих, які були виключені другим аргументом, а саме: hash, salt.
* Замість того, щоб створювати руками обʼєкт, прописувати потрібні поля та в результаті мати 2 інтерфейси замість одного.
* */






