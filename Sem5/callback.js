function register(){
    setTimeout(()=>{
        console.log("Register");
        
    },10000)

}
function login(){
    setTimeout(()=>{
        console.log("Login");
        
    },5000)
}
function getData(){
    setTimeout(()=>{
        console.log("fetch data")
        
    },3000)
}
function displayData(){
    setTimeout(()=>{
        console.log("dislay")
        
    },6000)
}

// register(
//     ()=>{
//         login(
//             ()=>{
//                 getData(
//                     ()=>{
//                         displayData()
                        
                        
//                     }
//                 )
//             }
//         )
//     }
// )

async function test() {
    try{
        await register();
        await login();
        await getData();
        await displayData();
    }
    catch(err){
        console.log("Error:",err)
    }
}
test();
console.log("Call Another application");