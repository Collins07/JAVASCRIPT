/*
  Destructuring
  - Destructuring Function Parameters
*/


const user = {
    theName: "Osama",
    theAge: 39,
    skills: {
      html: 70,
      css: 80,
    },
  };


  showDetails(user);

function showDetails ({theName : n , theAge :a , skills:{html , css}} = user){
  console.log(`my name is ${n} and my age is ${a} and my html and css skill rate are ${html} and ${css}`)

}