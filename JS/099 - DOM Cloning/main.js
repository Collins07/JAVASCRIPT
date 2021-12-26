/*
  DOM [Cloning]
  - cloneNode(Deep)
*/

let myP = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");

myP.id = `clone`;
myP.className = 'omar '

myDiv.appendChild(myP);