/*
  Destructuring
  - Destructuring Mixed Content
*/
const user = {
    theName: "omar",
    age: 18,
    Skills: ["html","css","js"],
    Addresses: {
        egypt: "cairo",
        Ksa: "Riyadh",
    },
};

const {
    theName : n ,
    age: b ,
    Skills: [ , , three ],
    Addresses: {egypt : e},

} = user ;


console.log(`Your Name Is ${n}`)
console.log(`Your Age Is ${b}`)
console.log(`Your Last Skill Is ${three}`)
console.log(`Your Country Capital is ${e}`)