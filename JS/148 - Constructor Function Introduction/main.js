function User(id,name,salary){
    this.i = id
    this.u = name 
    this.s = salary

}

const userOne = new User(1,"omar",5000)
const userTwo = new User(2,"Samir",15000)
const userThree = new User(12,"osama",5000)



console.log(userOne.i)
console.log(userOne.u)
console.log(userOne.s)

console.log(userTwo.i)
console.log(userTwo.u)
console.log(userTwo.s)


console.log(userThree.i)
console.log(userThree.u)
console.log(userThree.s)


// const userOne = {
//     id : 1,
//     username : "omar",
//     salary : 5000
// }