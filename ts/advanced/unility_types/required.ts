

/*
* Required - делает все поля в типе обязательными.
* */

type FullProfile = {
    id?: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    birthday?: string;
    createAt?: string;
};


// ========= Solution 1.1 =========
type EditableProfileFields = Required<FullProfile>;





