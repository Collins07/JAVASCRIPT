/*
  Promise
  - All
  - All Settled
  - Race
*/

const myFirstPromise = new Promise((res,rej)=>{
        setTimeout(() => {
            res("I'm The First Promise")
            
        }, 3000);
})
  
  const mySecondPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res("Iam The Second Promise");
    }, 1000);
  });
  
  const myThirdPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res("Iam The Third Promise");
    }, 2000);
  });
  
  Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
    (resolvedValues) => console.log(resolvedValues),
    (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
  );
  
// Promise.allSettled([myFirstPromise,mySecondPromise,myThirdPromise]).then(
//     (resolved) => console.log(resolved), 
//     (rejected) => console.log(`Rejected : ${rejected}`))
//   Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//     (resolvedValues) => console.log(resolvedValues),
//     (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
//   );
