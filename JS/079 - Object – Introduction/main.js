/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

// let user = {
//     // Properties
//     theName: "Osama",
//     theAge: 38,
//     // Methods
//     sayHello: function() {
//         return `Hello`;
//     },
// };

let user = {
  theName: "omar",
  theAge: 18,
  sayHello: function(){
    return `hello`
  }
}
console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello() + " " + user.theName);