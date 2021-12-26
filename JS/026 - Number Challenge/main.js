/*
  Number Challenge
*/

let a = 100;
let b = 200.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.min(a, b, c, d, Math.trunc(d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(d, a)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(parseInt(d.toFixed(0))); //2

// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => string// 
console.log((Math.ceil(b) / Math.ceil(d))); // 67 => Number