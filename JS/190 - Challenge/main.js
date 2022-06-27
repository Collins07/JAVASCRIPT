// Input


let numbers = [15.60, 2, 2, 2, 4, 5, true, true, 7, "A", 2, false, 2, 8, 9];

function ReturnTrue(){
    let newArray = []
  numbers.filter((ele)=>{
    if(ele === true){
        ele = 1
        newArray.push(ele)
    }else if(ele === false){
        ele = 0
        newArray.push(ele)
    }
  })
  console.log(newArray)

}

ReturnTrue()



// Output
// 15
// 9
// 8
// 7
// 5
// 4
// 2
// 1
// 0