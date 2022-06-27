/*
  Async & Await With Try, Catch, Finally
*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Iam The Good Promise");
    }, 3000);
  });
  
// async function readData(){
//     console.log("before Promise")
//     try{
//         console.log(await myPromise)
//     } catch (reason) {
//         console.log(reason)
//     } finally {
//         console.log("After Promise")
//     }
// }
  
//   readData();
  
  // "https://api.github.com/users/elzerowebschool/repos"
  
async function fetchData(){
    console.log("Before Fetch")

    try {
        let data = await fetch("https://api.github.com/users/omsmir/repos")

        let DataJson = await data.json()
         
        for (let i = 0; i < DataJson.length; i++ ){
            
        let div = document.createElement("div")
        document.body.style.cssText = "display: flex; justify-content:center; align-items: center; flex-direction: column;"
        div.style.cssText = "width: 750px; display: flex; justify-content:center; align-items: center; border: 1px solid #000;"

        div.appendChild(document.createTextNode(DataJson[i].name))

        document.body.appendChild(div)

        }


    } catch (error){
        console.log(Error(`${error}`))
    } finally {
        console.log("After Fetch")
    }
}
  fetchData();