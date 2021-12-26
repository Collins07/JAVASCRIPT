/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];


document.write(`<div>We Have X Admins</div>`);
document.write(`<div>We Have 3 Admins</div>`);


for (let i = 0; i < myAdmins.length; i ++) {
  document.write(`<div>`)
  document.write(`the admin for team ${i + 1} is ${myAdmins[i]} `)
  document.write(`<h3> team members  </h3>`)
  
for (let j = 0; j < myEmployees.length; j++){
  if (myEmployees[j][0] === myAdmins[i][0]){
    document.write(`<p> ${myEmployees[j]} </p>`)


  }

}

document.write(`<hr></hr>`)

  if (myAdmins[i] === "Sayed"){
    break;

  }
}

