/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/


let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);



var newObject = {
    10: "number",
    "10": "string ",
}

console.log(newObject[10]);


let newMap = new Map()


newMap.set(10, "number")
newMap.set("10", "String");
newMap.set(true, "Boolean");
newMap.set({a: 1, b: 2}, "Object");
newMap.set(function doSomething() {}, "Function");

console.log( newMap.get(10))
console.log( newMap.get("10"))



console.log(newMap.delete("10"))
console.log(myMap.get("10"))


console.log("####");

console.log(newObject);
console.log(newMap)