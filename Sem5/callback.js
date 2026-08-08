function greet(name,callback){
    console.log("hello", name);
    callback(name); //ye bye wale function me name pass kr rhe
}
function bye(username){
    console.log("bye",username);
    
}
greet("Anmol",bye);