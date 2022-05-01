/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

console.log("Osama");
console.log(..."Osama");
console.log([..."Osama"]);

// Concatenate Arrays

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];
let newAr = myArray1.concat(myArray2)

newAr.forEach((ele)=>{
  document.write(ele)
})
let allArrays = [...myArray1, ...myArray2];
console.log(allArrays);
