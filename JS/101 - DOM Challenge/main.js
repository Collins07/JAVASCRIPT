let myheader = document.createElement('header');
let mydiv1 = document.createElement('div');
let myul = document.createElement('ul');
let myli1 = document.createElement('li')
let myli2 = document.createElement('li')
let myli3 = document.createElement('li')
let myli4 = document.createElement('li')

let mytext = document.createTextNode("Elzero")

let mytext1 = document.createTextNode("Home")
let mytext2 = document.createTextNode("About")
let mytext3 = document.createTextNode("Services")
let mytext4 = document.createTextNode("Contact")

mydiv1.appendChild(mytext)
myheader.appendChild(mydiv1);
mydiv1.appendChild(myul);
myul.appendChild(myli1);
myul.appendChild(myli2);
myul.appendChild(myli3);
myul.appendChild(myli4);

myli1.appendChild(mytext1)
myli2.appendChild(mytext2)
myli3.appendChild(mytext3)
myli4.appendChild(mytext4)


document.body.appendChild(myheader);
myheader.style.cssText = "margin: 0px; padding: 0px; justify-content: space-between; align-items: center"
myul.style.cssText = "list-style: none; color: grey; display: flex; font-weight: bold;"
mydiv1.style.cssText = "margin: 0px; padding: 0px; color: green; font-weight: bold; font-size: 20px;"