/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));
// Zero

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split("", 6)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0, 7) + a.substr(11, 17)); // Elzero School
console.log(`${a.substr(0,6)} ${a.substr(11,16)}`);
// Solution Must Be Dynamic Because String May Changes
console.log(a.charAt() + a.charAt(0).toLowerCase() + a.slice(1, 16) + a.charAt(16).toLowerCase()); // eLZERO WEB SCHOOl
console.log(a.charAt(0).toLowerCase() + a.substring(1, 16).toUpperCase() + a.charAt(16).toLowerCase());
console.log(a.lastIndexOf("l"))