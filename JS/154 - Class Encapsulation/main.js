/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

class user{
    
    constructor(id, username, eSalary){
        this.i = id
        this.u = username 
        this.e = eSalary
        
    }
    getSalary() {
        let reg = /\d+/ig;
        let salary = (this.e.match(reg).join(""));
        let Num = parseInt(salary)
        return  Num 
      }
}


let usrOne = new user(1,"omar","mysalaryis$7000 pound")


console.log(usrOne.i)
console.log(usrOne.u)
console.log(usrOne.getSalary())