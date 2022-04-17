/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/
let myString = "AaBbcdefG123!234%^&*";
let atozSmall = /[a-z]/g;
let NotatozSmall = /[^a-z]/g;
let atozCapital = /[A-Z]/g;
let NotatozCapital = /[^A-Z]/g;
let aAndcAnde = /[ace]/g;
let NotaAndcAnde = /[^ace]/g;
let AllLetters  = /[a-z]/ig;
let NotAllLetters = /[^a-z]/ig
let special = /[^a-z1-4]/ig;


console.log(myString.match(atozSmall))
console.log(myString.match(NotatozSmall))
console.log(myString.match(atozCapital))
console.log(myString.match(NotatozCapital))
console.log(myString.match(aAndcAnde))
console.log(myString.match(NotaAndcAnde))
console.log(myString.match(AllLetters))
console.log(myString.match(NotAllLetters))
console.log(myString.match(special))