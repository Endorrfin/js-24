/*
* Exclude - виключає із першого типу признаки, що присутні у другого
*
* Exclude приймає 2 параметри:
*   1. передає який-небудь тип
*   2. предає поля, які потрібно виключити
* */


// ========= Example 1.1 =========
type UserSchemaType = {
  id: number;
  username: string;
  email: string;
  bio: string;
  image: string;
  hash: string;
  salt: string;
}

type PublicFields = Exclude<keyof UserSchemaType, 'hash' | 'salt'>


