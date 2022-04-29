/*
  Class
  - Inheritance
*/

// Parent Class

class user{
    constructor(id,username){
        this.id = id
        this.name = username
    }
    sayHello() {
        return `Hello ${this.name}`;
      }
}

class Admin extends user{
    constructor(id, username, permissions) {
        super(id,username)
        this.p = permissions

    }

}



class superman extends Admin{
    constructor(id,username,permissions,ability){
        super(id,username,permissions)
        this.a = ability
    }
}


let userOne = new user(100, "Elzero");
let adminOne = new Admin(110, "Mahmoud", 1);
let superOne = new superman("","","",true)





console.log(userOne.id)
console.log(userOne.name)
console.log(userOne.sayHello());
console.log(adminOne.p)
console.log(adminOne.name)
console.log(adminOne.id)
console.log(adminOne.sayHello());
console.log(superOne.a)