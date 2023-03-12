/*
* Required - делает все поля в типе обязательными.
* */

// ========= Example 1.1 =========
type FullProfile = {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  birthday?: string;
  createAt?: string;
};


type EditableProfileFields = Required<FullProfile>;


// ========= Example 2.1 =========
type Task = {
  id: number;
  text: string;
  isCompleted?: boolean;
  completedDate?: Date | undefined;
};


type TaskRequired = Required<{
  id: number;
  text: string;
  isCompleted?: boolean;
  completedDate?: Date | undefined;
}>;


// const task: TaskRequired = {
//     id: 0,
//     text: 'Text',
// }

// Type '{ id: number; text: string; }' is missing the following properties from type 'Required{ id: number; text: string; isCompleted?: boolean; completedDate?: Date; }>'


function getCompleted(tasks: Task[]) {
  return tasks.filter(t => t.isCompleted && t.completedDate) as Required<Task>[]
  // возвращает только те задачи у которых поле isCompleted & completedDate заполнено.
}

// const tasks = getCompleted([task])
//
// tasks[0]. // всі поля доступні








