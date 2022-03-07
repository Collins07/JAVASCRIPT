/*
  Destructuring
  - Challenge
*/
let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if (chosen === 1 ){
  var [{title : a , age: b , available :  c, skills: [ , d]} ] = myFriends;
  var c = "available"


  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
 
} else if (chosen === 2) {
  var [{title : a , age: b , available : c , skills: [ , d]}, 
  {title: e , age : r , available: t ,skills:[ , y]} ] = myFriends;
  var t = "Not Available"

  console.log(e)
  console.log(r)
  console.log(t)
  console.log(y)

}else if (chosen === 3) {
  var [{title : a , age: b , available : c , skills: [ , d]}, 
  {title: e , age : r , available: t ,skills:[ , y]} , 
  {title: u , age: i ,available: n , skills: [ , o]}] = myFriends;
  var n = "available" ;

  console.log(u)
  console.log(i)
  console.log(n)
  console.log(o)


}
