/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/
let mapUser = { theName: "omar" };
console.log(mapUser.theName)

let myMap = new Map();

mapUser = null; // Override The Reference


myMap.set(mapUser, "Object Value");

// 
console.log(myMap);



console.log("#".repeat(20));

let wMapUser = { theName: "omar" };

let myWeakMap = new WeakMap();


myWeakMap.set(wMapUser, "Object Value");

wMapUser = null; // Override The Reference


console.log(myWeakMap);