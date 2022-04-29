/*
  Class
  - Static Properties And Methods
*/

class user {
      // Static Property
   static count = 0
    constructor (id,username,salary,authentication){
        this.i = id;
        this.u = username;
        this.s = salary;
        this.o = authentication
        user.count++;

    }
  static sayHello(){
      return `hello from Class`
  }

  static members(){
      return `${this.count} Members Created`
  }
}

let userOne = new user(100, "Elzero", 5000,false);
let userTwo = new user(101, "Ahmed", 5000);
let userThree = new user(102, "Sayed", 5000);
let userFour = new user(4,"",600,true)

console.log(userOne.u);
console.log(userOne.o);
console.log(userTwo.u);
console.log(userOne.count);
console.log(user.count);
console.log(user.sayHello());
console.log(user.members());