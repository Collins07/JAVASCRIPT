/*
  Constructor Function
  - New Syntax
*/

class user {
    constructor(id,username,salary){
        this.i = id
        this.u = username
        this.s = salary + 1000
    }
}

const UserOne = new user(1,"omar",5000)


console.log(UserOne.i)
console.log(UserOne.u)
console.log(UserOne.s)


console.log(UserOne instanceof user)
console.log(UserOne.constructor === user);