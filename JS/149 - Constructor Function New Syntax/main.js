/*
  Constructor Function
  - New Syntax
*/

class user {
  constructor(id ,name ,salary){
    this.i = id
    this.u = name
    this.s = salary + 5000

  }
}

const UserOne = new user(1,"omar",5000)


console.log(UserOne.i)
console.log(UserOne.u)
console.log(UserOne.s)


console.log(UserOne instanceof user)
console.log(UserOne.constructor === user);