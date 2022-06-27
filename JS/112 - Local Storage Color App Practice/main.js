/*
  BOM [Browser Object Model]
  Local Storage Practice
*/


let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");


if(window.localStorage.getItem("color")) {

    lis.forEach((li) => {
        li.classList.remove("active")
       
    })
document.querySelector(`[data-color= ${window.localStorage.getItem("color")}]`).classList.add("active");

exp.style.backgroundColor = window.localStorage.getItem("color");

}


lis.forEach((li) => {
    li.addEventListener("click", (e) =>
    {
     lis.forEach((li) => {
         li.classList.remove("active")
        
     })
     li.classList.add("active")

     window.localStorage.setItem("color", li.dataset.color)

     exp.style.backgroundColor = li.dataset.color;
    })
})