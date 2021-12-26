/*
  Scope
  - Block Scope [If, Switch, For]
*/

const x = 10;

if (true) {
    const x = 50;
    console.log(`From If Block ${x}`);
}

console.log(`From Global ${x}`);