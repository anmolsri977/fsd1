function Footer(){
    let footer=document.createElement("h1");
    footer.textContent="this is footer";
    let root=document.querySelector("#root");
    root.append(footer);
    return footer;
}

export default Footer;