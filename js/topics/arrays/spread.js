/*
Оператор spread (…) используется для добавления элементов одного массива в другой. Например, объединим два массива чисел:
*/

const nums1 = [1, 2, 3, 4, 5];
const nums2 = [6, 7, 8, 9, 10];

// ! Длинный способ
let newArrayLong = nums1.concat(nums2);
// console.log(newArrayLong);

// ! Короткий способ
let newArrayShort = [...nums1, ...nums2];
// console.log(newArrayShort);



/*
Оператор spread с деструктуризацией можно применять для присвоения оставшихся элементов новой переменной:
*/

const student = {
    name: "Matt",
    age: 23,
    city: "Helsinki",
    state: "Finland",
};


// ! Длинный способ
// const name = student.name;
// const age = student.age;
// const address = {
//     city: student.city,
//     state: student.state
// };

// ! Короткий способ
const {
    name,
    age,
    ...address
} = student;
// console.log(student);


/*
Удаление повторяющихся элементов из массива
*/

const numbers = [1, 1, 2, 3, 4, 4, 4, 5, 7, 9, 11, 11, 17, 19, 19]
const uniqueNumbers = [...new Set(numbers)]
// console.log(uniqueNumbers);

// console.log([... 'Vasyl Krupka']);
// console.log({... 'Vasyl Krupka'});
