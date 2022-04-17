/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/
const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "iraq",
    theColor: "Black",
    skills: {
      html: 70,
      css: 80,
    },
  };
  
  const {
    theName: n,
    theAge: a,
    theCountry: i,
    theColor: co = "Red",
    skills: { 
      html:h, 
      css : c
    },
  } = user;
  
  console.log(n);
  console.log(a)
  console.log(i)

  console.log(co)
  console.log(`My HTML Skill Progress Is ${h}`);
console.log(`My CSS Skill Progress Is ${c}`);

const {html, css} = user.skills;
const {thename = "omar"} = user.theName;

console.log(thename)

console.log(`My HTML Skill Progress Is ${html}`)

console.log(`My css Skill Progress Is ${css}`)