/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

let element = document.getElementById("my-div");

element.style.color = "red";
element.style.fontWeight = "bold";

element.style.cssText = "font-weight: bold; color: green; opacity: 0.5";

element.style.removeProperty('color');
element.style.setProperty('font-size', '40px', "important");


document.styleSheets[0].rules[0].style.removeProperty("line-height")


document.styleSheets[0].rules[0].style.setProperty("background-color", "green")