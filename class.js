class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  get getName() {
    return this.name;
  }
}

const user = new User('Hazhar', '***@gmail.com', 21);
console.log(user.getName);