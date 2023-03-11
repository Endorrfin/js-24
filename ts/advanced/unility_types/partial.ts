

/*
* Partial - делает все поля в типе опциональными.
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


sendNewProfileData({birthday: '2000.10.18'});


function sendNewProfileData(profileData: Partial<EditableProfileFields>): void {

}



