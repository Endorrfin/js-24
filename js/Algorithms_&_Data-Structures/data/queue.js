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


// ------- Example 1.2 -------

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


// ------- Example 2.1 -------
function queueTime(customers, n) {
  if (!customers.length) return 0;
  const queue = [...customers];
  const tills = Array(Math.min(n, customers.length)).fill(0);
  // console.log(tills);
  while(queue.length) {
    const customer = queue.shift();
    const tillMinId = tills.indexOf(Math.min(...tills));
    tills[tillMinId] += customer;
  }

  // console.log(tills);
  return Math.max(...tills);
}


// console.log(queueTime([], 1), 0);
// console.log(queueTime([1, 2, 3, 4], 1), 10);
// console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
// console.log(queueTime([1, 2, 3, 4, 5], 100), 5);
