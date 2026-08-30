let today = new Date();
console.log(today);
console.time("test");
for(let i=0;i<10000;i++){}
console.timeEnd("test");

console.group("Group1");
console.log("Anmol")
console.log("Anand")
console.log("Gopal")
console.groupEnd("Group1");


console.count("a");
console.count("a");
console.count("b");
console.count("a");
console.count("b");
console.countReset("a");
console.count("a");

//table
let student = {name:"Anmol",age:20,course:"btech"};
console.table(student);


