const div=documnet.createElement("div");
dic.setAttribute("class","card")
const image=document.createElemet("img")
image.setAttribute("src","");
image.setAttribute("width","100px");
image.setAttribute("height","100px");
const h2=document.createElemet("h2")
h2.innerText="Price:465/-";
const bt=document.createElement("button");
bt.innerText="Add to cart";
div.appendChild(image);
div.appendChild(h2);
div.appendChild(bt);
const parent=document.getElementById("root");
parent.appendChild(div);