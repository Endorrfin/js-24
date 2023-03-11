

/*
* Pick - фильтрует базовый тип: выбирает нужные нам свойства, на основе которых создается новый тип.
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





