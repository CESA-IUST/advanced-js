const fetch = require('node-fetch');

// fetch('https://api.github.com/users')
// .then(response => {
//   console.log('Response');
//   console.log(response);
// }).catch(error => {
//   console.log('Error');
//   console.log(error);
// });

async function getData(url) {
  try {
    const response = await fetch(url);
    console.log('Success');
    console.log(response);
  } catch (error) {
    console.log('Error');
    console.log(error);
  }
}

getData('https://api.github.com/users');

