// ============ STACK ============

/*
* A Stack is a linear data structure that follows the LIFO (Last-In-First-Out) principle.
* Stack has one end, whereas the Queue has two ends (front and rear).
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


const stack = {
  data: [],
  add: function(newData) {
    this.data.push(newData)
  },
  next: function() {
    return this.data.pop()
  }
}

// console.log(stack);
stack.add(student1);
stack.add(student2);
// console.log(stack);
// console.log(stack.next());
// console.log(stack);
