/*
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
*/


class user{
    constructor(id,username){
        this.i = id
        this.u = username

    }
    sayhello(){
        return`Hello ${this.u}`
    }
}

let userOne = new user(100, "Omar");
console.log(userOne.u);


console.log(user.prototype);

let strOne = "omar";

console.log(String.prototype)