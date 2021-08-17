
const numbers = [1, 2, 3, 4, 5];

// const x = numbers[0];
// const y = numbers[1];

const [x, y, ...rest] = numbers;
const [,] = numbers;

// console.log(x + ' ' + y);
// console.log(rest);

const object = {
  id: 1,
  fullName: 'name',
  email: 'foo@gmail.com',
  age: 10
};

const { id, fullName } = object;
// console.log(id);
// console.log(fullName);