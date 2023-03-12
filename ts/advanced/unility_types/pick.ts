/*
* Pick - фильтрует базовый тип: выбирает нужные нам свойства, на основе которых создается новый тип.
* Pick - призначений для фільтрації ключів обʼекта, поля яких необхідно залишити.
*
* generic Pick приймає 2 параметри:
*   1. обʼєкт з якого потрібно буде вибирати поля
*   2. список полів, які необхідно вибрати
* */


enum MessageProfileInfoEnum {
  Username = 'username',
  FirstName = 'firstName',
  LastName = 'firstName',
}

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
type MessageProfileInfo = Pick<FullProfile, 'username' | 'firstName' | 'lastName'>;


// ========= Solution 1.2 =========
type MessageProfileInfoShort = Pick<FullProfile, MessageProfileInfoEnum>;


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

type PublickUserFilds = Pick<UserSchemaType, 'username' | 'email' | 'bio' | 'image'>

/*
* Таким чином із допомогою "Pick" виберимо всі ті поля, які необхідні, а саме: username, email, bio, image.
* Замість того, щоб створювати руками обʼєкт, прописувати потрібні поля та в результаті мати 2 інтерфейси замість одного.
* */





