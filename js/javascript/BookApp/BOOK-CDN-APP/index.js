function book(props){
    const image=React.createElement("img",
                                   {src:"",width:"100px",height:"100px"},null);
    const title=React.createElement("h2",{style:{color:"red"}},"Title:" + props.title);
    const price=React.createElement("h2",{style:{color:"green"}},"Price:" + props.price);
    const btn=React.createElement("button",{style:{color:"blue"}},"Add to cart");
    const div=React.createElement("div",{className:"book"},[image,title,price,btn]);
    return div;
}
const bookData=[
    {image:"",title:"ReactJS",price:"465/-"},
    {image:"",title:"NodeJS",price:"738/-"},
    {image:"",title:"ExpressJS",price:"798/-"},];

function App(){
    const bookStore=bookData.map((b)=>{
        return book(b)
    })
    const div=React.createElement("div",{className:"bookStore"},bookStore);
    return div;
}

const parent=document.getElementById("root");
const root = ReactDOM.createRoot(parent);

root.render(App());