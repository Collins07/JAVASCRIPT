/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/

let span = document.querySelector(".two");

console.log(span.parentElement);

span.onclick = function() {
    span.previousElementSibling.innerText = "omar samir";
    span.previousElementSibling.style.cssText = "color: green; font-size: 40px; background: black"
}