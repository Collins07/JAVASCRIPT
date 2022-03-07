/*
  Destructuring
  - Destructuring Array Advanced Examples
*/


let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// console.log(myFriends[3][2][1]);

let [a, , ,[b, ,[c , d]]] = myFriends;


console.log(b);
console.log(d);

