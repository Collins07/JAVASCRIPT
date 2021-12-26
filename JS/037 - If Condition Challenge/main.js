/*
  If Condition Challenge
*/



// if (a < 10) {
//     console.log(10);
// } else if (a >= 10 && a <= 40) {
//     console.log("10 To 40");
// } else if (a > 40) {
//     console.log("> 40");
// } else {
//     console.log("Unknown");
let a = 10;



a < 10 ?
    console.log(10) :
    a >= 10 && a <= 40 ?
    console.log("10 to 40") :
    a > 40 ?
    console.log("a > 40") :
    console.log("unknown");




// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

// W Position May Change
if (st.charAt(7).toLowerCase() === "w") {
    console.log("Good");
}

if (st !== "string") {
    console.log("Good");
};
if (typeof st === typeof "number") {
    console.log("Good");
}

if (st.substring(0, 6) + st.substring(0, 6) === "ElzeroElzero") {
    console.log("Good")
};