/*
  Regular Expression

  - replace
  - replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";

console.log(txt.replace("@","javascript"))
console.log(txt.replaceAll("@","javascript"))


let re = /@/ig;

console.log(txt.replaceAll(re,"java"))