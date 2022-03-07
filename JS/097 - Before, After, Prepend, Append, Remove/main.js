/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

let element = document.getElementById("my-div");
let createdP = document.createElement("p");
let text =document.createTextNode("omar samir")

createdP.appendChild(text)
element.after(createdP)
// element.remove();

// element.prepend("omar")