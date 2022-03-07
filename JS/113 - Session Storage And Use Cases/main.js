/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color" ,"green");
// window.sessionStorage.setItem("color" , "red");

document.querySelector(".name").onblur = function () {
    window.sessionStorage.setItem("name", this.value)
}

// window.localStorage.clear()
// window.sessionStorage.clear()