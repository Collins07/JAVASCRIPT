/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

class User {
    constructor(id, username) {
      this.i = id;
      this.u = username;
    }
    sayHello() {
      return `Hello ${this.u}`;
    }
  }

  let userOne = new User(100, "omar");
console.log(userOne.u);
console.log(User.prototype);
console.log(userOne);

User.prototype.sayWelcome = function () {
    return `Welcome ${this.u}`;
  };

  Object.prototype.love = "omar samir";

  console.log(userOne.sayWelcome());

  console.log(userOne.love);


  String.prototype.addDotBeforeAndAfter = function () {
    return `.${this}.`;
  };
  
  let myString = "omar";


  console.log(myString.addDotBeforeAndAfter())