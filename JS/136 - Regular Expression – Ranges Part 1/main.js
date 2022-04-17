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
let tld = "com net org info edu io";

let tldre = /(org|info|io)/i;

console.log(tld.match(tldre))

let nums = "12345678910";
let rnum = /[0-2]/g;

console.log(nums.match(rnum))


let numsNot = "12345678910";
let rnumNot = /[^0-2]/g;

console.log(numsNot.match(rnumNot))


let specialNums = "1!2@3#4$5%678910";

let specialNumsRe = /[^0-9]/g;

console.log(specialNums.match(specialNumsRe));


let practice = "Os1 Os1Os Os2 Os8 Os8Os";

let practiceRe = /Os[5-9]Os/g;

console.log(practice.match(practiceRe))



