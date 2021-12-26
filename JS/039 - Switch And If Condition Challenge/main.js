/*
  Switch Challenge
*/

let job = "Designer";
let salary = 0;

// if (job === "Manager") {
//     salary = 8000;
//     console.log(salary);
// } else if (job === "IT" || job === "Support") {
//     salary = 6000;
//     console.log(salary)
// } else if (job === "Developer" || job === "Designer") {
//     salary = 7000;
// } else {
//     salary = 4000;
// }

switch (job) {
    case "Manager":
        salary = 8000;
        console.log(`my salary is ${salary}`)
        break;
    case "IT":
    case "Support":
        salary = 6000;
        console.log(`my salary is ${salary}`)
        break;
    case "Developer":
    case "Designer" :
            salary = 7000;
            console.log(`my salary is ${salary}`)
        break; 
    default:
        salary = 4000;
        console.log(`my salary is ${salary}`)
};


/*
  If Challenge
*/

let holidays = 2;
let money = 0;

// switch (holidays) {
//     case 0:
//         money = 5000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 1:
//     case 2:
//         money = 3000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 3:
//         money = 2000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 4:
//         money = 1000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 5:
//         money = 0;
//         console.log(`My Money is ${money}`);
//         break;
//     default:
//         money = 0;
//         console.log(`My Money is ${money}`);
// }
if (holidays == 0) {
    money = 5000;
    console.log(`my money is ${money}`)
} else if (holidays == 1, 2) {
    money = 3000;
    console.log(`my money is ${money}`)

} else if (holidays == 3) {
    money = 2000;
    console.log(`my money is ${money}`)

} else if (holidays == 4) {
    money = 1000;
    console.log(`my money is ${money}`)

} else {
    money = 0;
    console.log(`my money is ${money}`)
};