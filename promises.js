const promise = new Promise((resolve, reject) => {
  const number = 2;
  if (number == 2) {
    resolve('Success');
  } else {
    reject('Fail');
  }
});

promise.then(data => {
  console.log(data);
}).catch(error => {
  console.log(error);
});

// other promise methods: 
// Promise.all, 
// Promise.allSettled, 
// Promise.race, 
// Promise.any, 
// Promise.resolve, 
// Promise.reject, 