function doSomething(value) {
  return function(response) {
    return function(other) {
      console.log(`${value} ${response} ${other}`);
    }
  }
}

const innerFunction = doSomething('Hello');

const secondInnerFunction = innerFunction('world!');

secondInnerFunction(' -- other value');