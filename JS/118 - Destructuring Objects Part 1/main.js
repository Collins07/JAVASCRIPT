/*
  Destructuring
  - Destructuring Object
*/

const user = {
    theName: "omar",
    age: 18,
    Title: "Developer",
    Country: "Iraq",
};


// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let age = user.age;
// let Title = user.Title;
// let Country = user.Country ;


// console.log(theName);
// console.log(age);
// console.log(Title);
// console.log(Country);

const {theName , age ,Title,Country} = user ;

console.log(theName)
console.log(age)
console.log(Title)
console.log(Country)