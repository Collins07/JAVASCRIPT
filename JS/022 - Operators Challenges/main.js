/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

//10   //unary         //-10
console.log(a + +b + c + -a);
//20
console.log(+a + -b + c - -a++ + +a);

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);




/*
  [++a] [+]
  [++a]
  - Value:
  - Explain:
  [+]
  - Explain:
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20"; //twice
let f = 30;
let g = true;

//Only Use Variables Value
// Do Not Use Variable Twice

console.log(+e * -d); // 2000
console.log(- + --d * ++g - --f); // 173