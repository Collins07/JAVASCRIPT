/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero, ++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, --counter).reverse()); // ["Elham ", "Mazero "]

my.splice(1, 2, "Elzero", "Sameer");
console.log(my.slice(1, 2).toString()); // "Elzero"

console.log(my.slice(1, 2).toString().charAt(4) + my.slice(1, 2).toString().charAt(5).toUpperCase()); // "rO"