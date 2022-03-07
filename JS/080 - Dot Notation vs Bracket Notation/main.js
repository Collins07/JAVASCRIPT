/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

// let myVar = "country";

// let user = {
//     theName: "Osama",
//     country: "Egypt",
// };

const myVar = "country"

let user = {
    theName: "omar",
    country: "egypt",
};

console.log(user.theName);
console.log(user.country); // user.country
console.log(user.myVar); // user.country // undefined
console.log(user[myVar]); // user.country