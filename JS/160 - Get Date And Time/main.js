/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

let dateNow = new Date();
let birthday = new Date("Feb 9, 2004");
let dateDiff = dateNow - birthday;

console.log(dateDiff);
console.log((dateDiff / 1000 / 60 / 60 / 24 / 365));

console.log(dateNow);
console.log(dateNow.getTime())
console.log(dateNow.getDate())
console.log(dateNow.getDay())
console.log(dateNow.getUTCMonth())
console.log(dateNow.getFullYear())
console.log(dateNow.getHours())
console.log(dateNow.getSeconds())