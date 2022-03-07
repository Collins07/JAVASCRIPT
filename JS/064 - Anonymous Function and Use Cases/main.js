/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

let calculator = function(num1, num2) {
    return num1 + num2;
};
console.log(calculator(10, 20));

function sayHello() {
    console.log("Hello Osama");
}

document.querySelector("#show").onclick = sayHello

setTimeout(function() {
    console.log("Good");
   
}, 2000);



setTimeout(function() {
    console.log("not good")
}, 3000)