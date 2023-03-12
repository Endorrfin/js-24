/*
* NonNullable - видаляє null & undefined із типу, який передається
* */


// ========= Example 1.1 =========

type T = NonNullable<string | null | undefined> // Після того, як пройде перевірку на NonNullable, стане типу string


// ========= Example 1.2 =========

type Task = {
  id: number;
  text: string;
  isCompleted?: boolean;
  completedDate?: Date | undefined;
};

function getTaskDate(date: Task['completedDate']): NonNullable<Task['completedDate']> {
  if(!date) {
    return new Date()
  }

  return date;
};

const task: Task = {
  id: 0,
  text: 'Text'
}

const result = getTaskDate(task.completedDate) // Date





