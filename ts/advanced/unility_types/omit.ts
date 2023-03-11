

/*
* Omit - исключает поля из базового типа, на основе оставшихся полей создается новый тип.
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






