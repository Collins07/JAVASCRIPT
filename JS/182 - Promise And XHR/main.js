/*
  Promise And XHR
*/

const getData = (apiLink) => {
  return new Promise((resolve, reject) =>{
    let request = new XMLHttpRequest()
    
    request.onload = function (){
        if(this.readyState == 4 && this.status == 200){
          resolve(JSON.parse(this.responseText))
        }else {
          reject(Error("No Data Found"))
        }
    }
    request.open("GET",apiLink)
    request.send()
  })

  };
  
getData("https://api.github.com/users/omsmir/repos").then((repos)=>{
  repos.length = 10;
  return repos
}).then((repos)=>{
  console.log(repos[3].full_name)
}).catch((reject)=>{
  console.log(reject)
})