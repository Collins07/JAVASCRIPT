/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

console.log(Array.from("omar"))


console.log(Array.from("12345", function(n) {
    return +n + +n
}))

console.log(Array.from("12345", (ele) => +ele + +ele))


let myArray = [1, 1, 1, 2, 3, 4];

let mySet = new Set(myArray);
console.log(mySet)

const newArray = Array.from(mySet)

let val = newArray.push("omar")



console.log(Array.from(mySet));

console.log(newArray)

// newArray.forEach((ele)=>{
//   console.log(ele)
// })
function returen(){
  return Array.from(arguments)
}
let arg = returen("set","omar","samir",1,1,2,3)
console.log(arg)

let NewSet = new Set(arg)
console.log(NewSet)