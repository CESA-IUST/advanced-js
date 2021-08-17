function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Person('Hazhar Aziz', 21);

Person.prototype.toString = function() {
  return `${this.name}: ${this.age}`;
}

Person.prototype.justName = function() {
  return this.name;
}

console.log(person.justName());