/*
  Constructor Function
  - Update Properties
  - Built In Constructors
*/


class user{
    constructor(id,username,salary)
    {
        this.i = id
        this.u = username
        this.s = salary
    }
    updateName(ele){
        this.u = ele
    }
}

let newUser = new user(1,"omar",5000)
console.log(newUser.u);
newUser.updateName("samir");
console.log(newUser.u);


let str = "omar"
let newStr = new String("samir")

console.log(typeof str);
console.log(typeof newStr);

console.log(str instanceof String);
console.log(newStr instanceof String);

console.log(str.constructor === String);
console.log(newStr.constructor === String);