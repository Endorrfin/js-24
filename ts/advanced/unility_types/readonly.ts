/*
* Readonly - делает поля в типе доступными только для чтения.
* type readonly - делает поля объекта обязательными.
* */

// ========= Example 1.1 =========
type Message = {
  readonly id: number;
  readonly chatId: number;
  readonly text: string;
};


type MessageOptimize = Readonly<{
  readonly id: number;
  readonly chatId: number;
  readonly text: string;
}>;


const message: Message = {
  id: 1,
  chatId: 1,
  text: 'Hello'
};

const messageOptimize: MessageOptimize = {
  id: 1,
  chatId: 1,
  text: 'Hello'
};


// message.text = Bye;

// messageOptimize.chatId = 2


// ========= Example 2.1 =========
type Task = {
  id: number;
  text: string;
  isCompleted?: boolean;
  completedDate?: Date | undefined;
}

const task: Task = {
  id: 0,
  text: 'Text',
}

function completeTask(task: Task) {
  task.isCompleted = true;
  task.completedDate = new Date();
}

completeTask(task);


// ========= Example 2.2 =========
type TaskReadonly = Readonly<{
  // readonly id: number;
  // readonly text: string;
  // readonly isCompleted?: boolean;
  // readonly completedDate?: Date | undefined;

  // OR TaskReadonly = Readonly< { id: number; text: string; isCompleted?: boolean; completedDate?: Date | undefined; }>

  id: number;
  text: string;
  isCompleted?: boolean;
  completedDate?: Date | undefined;
}>

// Теперь typescript не даст мутировать задачу напрямую, так как поля данного объект доступны только для чтения.

const taskReadonly: TaskReadonly = {
  id: 0,
  text: 'Text',
}


function completeTaskReadonly(taskReadonly: TaskReadonly) {
  // taskReadonly.isCompleted = true; // TS2540: Cannot assign to 'isCompleted' because it is a read-only property.
  // taskReadonly.completedDate = new Date(); // TS2540: Cannot assign to 'completedDate' because it is a read-only property.
}

completeTaskReadonly(taskReadonly);



