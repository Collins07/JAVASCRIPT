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
        iraq:["baghdad","elhamra"]
    },
};

console.log(user["Addresses"]["iraq"][1])
console.log(user["Skills"])
console.log(user.Addresses.iraq.join(" "))

const {
    theName : n ,
    age: b ,
    Skills: [ , , three ],
    Addresses: {egypt : e , Ksa: o , iraq},

} = user ;


console.log(`Your Name Is ${n}`)
console.log(`Your Age Is ${b}`)
console.log(`Your Last Skill Is ${three}`)
console.log(`Your Country Capital is ${e}`)
console.log(`Your Country Capital  is ${o}`)
console.log(`${iraq}`)