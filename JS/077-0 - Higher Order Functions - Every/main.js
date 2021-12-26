let numbers = [45, 19, 70, 20, 25];

// Every Determines whether if all the array has passed the test 

let allOver18 = numbers.every(myFunction);

document.getElementById("demo").innerHTML = "All over 18 is " + allOver18;

function myFunction(value) {
    return value > 18;
}