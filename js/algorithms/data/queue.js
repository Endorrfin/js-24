// ============ QUEUE ============

/*
* Queue is referred to be as First In First Out list.
* For example, people waiting in line for a rail ticket form a queue.
* */

const student1 = {
  name: 'Vasa',
  age: 24
};

const student2 = {
  name: 'Petya',
  age: 25
};

const student3 = {
  name: 'Anna',
  age: 18
};

const student4 = {
  name: 'John',
  age: 22
};


const studentArray = [student1, student2, student3, student4];


const queue = {
  data: [],
  add: function(newData) {
    this.data.push(newData)
  },
  next: function() {
    return this.data.shift()
  }
}

// console.log(queue);
queue.add(student1);
queue.add(student2);
// console.log(queue);
// console.log(queue.next());
// console.log(queue);
