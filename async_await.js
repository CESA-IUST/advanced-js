const sendRequest = (body, valid) => {
  return new Promise((resolve, reject) => {
    if (valid) {
      resolve({
        status: 200,
        data: body
      });
    } else {
      reject({
        status: 400,
        message: 'Bad Request'
      });
    }
  });  
} 

async function getData(data) {
  try {
    const response = await sendRequest(data, true);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}

getData({name: 'Hazhar', email: '***@gmail.com'});