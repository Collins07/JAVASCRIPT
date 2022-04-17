/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/
let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails

let re = /\w+@\w+.\w+/ig;

console.log(mails.match(re))
let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0

let numsre = /0\d*0/ig;

console.log(nums.match(numsre))

let urls = "https://google.com http://www.website.net web.com"; // http + https

let urlre = /(https?:\/\/)?(www.)?\w+.(com|net)/ig;

console.log(urls.match(urlre))