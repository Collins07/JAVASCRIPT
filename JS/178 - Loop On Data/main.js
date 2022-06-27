/*
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication
*/

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/omsmir/repos");
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {

    let jsData = JSON.parse(this.responseText)

    console.log(jsData)

    for(let index = 0 ; index < jsData.length; index++){
        let div = document.createElement("div")

        let repo = document.createTextNode(jsData[index].full_name)

        div.appendChild(repo)

        document.body.appendChild(div)

    }
   
    }
  }
