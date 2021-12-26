/*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

let day= 1;

switch (day) {
    default: console.log("Unknown Day");
    break;
    case "omar":
            console.log("Saturday");
        break;
    case 1:
            console.log("Sunday");
        break;
    case 2:
            case 3:
            console.log("Monday");
        break;
}
let omar = 3;

switch (omar) {
    case 2:
        console.log("hi")
        break;
    case 3:
        document.write("fuckyou".substring(0, 5).toUpperCase());
        break;
}