/*
  DOM [Cloning]
  - cloneNode(Deep)
*/

let myP = document.querySelector("p");
let myDiv = document.querySelector("div").cloneNode(true);

myDiv.id = `clone`;
myDiv.className = 'omar'
myDiv.innerText = "omar samir"
myDiv.style.cssText = "margin: 20px; background: green; width: fit-content; color: white; font-weight: bold; font-size: 25px;"

myP.appendChild(myDiv);