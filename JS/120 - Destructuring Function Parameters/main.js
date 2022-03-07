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


 function showDetails({ theName: n, theAge: b, skills:{ css :c}} = user) {
      console.log(`Your Name Is ${n}`);
      console.log(`Your Age Is ${b}`);
      console.log(`Your Css Skill Progress Is ${c}`);
  };