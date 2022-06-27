class user {
    constructor(id,username,salary)
    {
        this.i = id
        this.u = username || "unknown"
        this.s = salary < 6000 ? salary + 500 : salary
        this.msg = function (){
            return `Hello ${this.u} Your id is ${this.i} and your salary is ${this.s}`
        }
    }
}


let userOne  = new user(1,"omar",6000)

let userTwo  = new user(1,"",5000)


console.log(userOne.i)
console.log(userOne.u)
console.log(userTwo.u)
console.log(userTwo.msg)
console.log(userTwo.msg())
console.log(userOne.msg())