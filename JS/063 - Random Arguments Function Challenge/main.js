/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/
// let info = age,
//     name, hire

// if () {

// }

// function showDetails() {



// }



// showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


function showDetails(a, b, c) {

    let info = [a, b, c],
        name, age, avaliability, sentance;

    for (let i = 0; i < 4; i++) {
        typeof info[i] === "string" ?
            (name = info[i]) :
            typeof info[i] === "number" ?
            (age = info[i]) :
            typeof info[i] === "boolean" ?
            (avaliability = info[i]) :
            "incorrect data type";

    }



    avaliability === true

        ?
        (sentance = "You are avaliable For Hire")

    : (sentance = "You are not avaliable For Hire");



    console.log(`Hello ${name}, Your age Is ${age} , ${sentance}`);

}

showDetails("Osama", 38, true);

showDetails(38, "Osama", true);

showDetails(true, 38, "Osama");

showDetails(false, "Osama", 38);