/*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed Finally Do Something
*/

const Mypromise = new Promise((Resolved,rejected)=>{
    let Employees = ["omar",'samir',"Ziad","osama"]

    if(Employees.length == 4){
        Resolved(Employees)
    }else {
        rejected(Error("Interview Rejected"))
    }

})

Mypromise.then((ResolvedValue)=>{
    ResolvedValue.length = 2 
    return ResolvedValue

}).then((ResolvedValue)=>{
    ResolvedValue.length = 1
    return ResolvedValue
}).then((ResolvedValue)=>{
    console.log(`the Chosen Employee is ${ResolvedValue}`)
}).catch((rejectedValue)=>{
    console.log(rejectedValue)
}).finally(()=>{
    console.log("operation is Done")
})