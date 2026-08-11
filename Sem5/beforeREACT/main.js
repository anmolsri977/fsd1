import age from './app.js'
import header from './Header.js'
import footer from './Footer.js'
header();

let heading= document.createElement("h1");
heading.textContent="Anmols Journey to learn React";
let root=document.querySelector("#root");
root.append(heading);
console.log(age);

footer();