function doubleArray(array) {
  let newArray = [];
  array.forEach(element => {
    newArray.push(element * 2);
  });

  return newArray;
}

const array = [1,2,3,4];
console.log(doubleArray(array));