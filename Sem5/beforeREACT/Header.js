function Header(){
    let nav=document.createElement("h1");
    nav.textContent="this is header";
    let root=document.querySelector("#root");
    root.append(nav);
    return nav;
}

export default Header;