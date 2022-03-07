/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

let book = "video";
let video = "book ";



// Change Book Value
book = video; // Book


// Save Book Value In Stash
let stash = book; // Video


// Change Video Value
video = stash; // Video


[book , video] = [video, book]

console.log(video)
console.log(book)


