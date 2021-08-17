const axios = require('axios').default;

async function getData() {
  try {
    const result = await axios.get('https://api.github.com/users');
    console.log(result.data);
  } catch (error) {
    console.log(error);
  }
}

getData();