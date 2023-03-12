/*
* Partial - делает все поля в типе опциональными.
* Partial - позволяет делать все поля объекта опциональными, использовать можем, когда нам необходимо частично переопределить поля задачи.
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


// ========= Example 2.1 =========
type Task = {
  id: number;
  text: string;
  isCompleted?: boolean;
  completedDate?: Date | undefined;
}

type OptionalTask = Partial<Task>


const task: Task = {
  id: 0,
  text: 'Text',
}

function update(task: Task, path: Partial<Task>): Task {
  return {
    ...task,
    ...path
  }
};

update(task, {id: 1, text: 'Ukraine', isCompleted: false, completedDate: undefined});

// update(task, {id: 1, text: 'Ukraine', isCompleted: false, isEnough: false}); // isEnough - is inValid, because this field is messing in type Task