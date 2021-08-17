function greetings(name) {
  return `hello ${name}`;
}

function doSomething(callback) {
  console.log(callback('Hazhar'));
}

doSomething(greetings);