//template literals
const a=10;
const b=20;
console.log(`The sum of ${a} and ${b} is ${a + b}`);

//hoisting
const ans=greet();
function greet(){
   
    sum=10+20;
    return sum;
}

//variables
function variables(){
    let a=5;
    var b=20;
    if(true){
         let a=10;
         console.log(a); //10
    }
    console.log(b);//20
    console.log(a);//5
}
variables();
//-------------------------------------------------------//


//datatypes
function dataTypes(){
    let num=100; //number
    let str="Hello World"; //string
    let bool=true; //boolean
    let arr=[1,2,3,4,5]; //object
    let obj={name:"John", age:30}; //object
    let a;//undefined
    let n=null; //object
    let c=10/0;

    console.log(typeof num);
    console.log(typeof str);
    console.log(typeof bool);
    console.log(typeof arr);
    console.log(typeof obj);
    console.log(typeof a);
    console.log(typeof n);
    console.log(c);
}
dataTypes();

//-------------------------------------------------------//
//array
const arr=[10,20,30,40,50];
arr.forEach(num=>{
    console.log(num);
})

//== & ===
function compare(){
    let a=10;
    let b='10';
    console.log(a==b);//true
    console.log(a===b);//false
}
compare();

//-------------------------------------------------------//
//isNaN
function checkNaN(){
    let a=10;
    let b="hello";
    console.log(isNaN(a)); //false
    console.log(isNaN(b));//true
}
checkNaN();
//-------------------------------------------------------//

//MAP METHOD
function map(){
    let a=[24,45,67,89,20];
    let numbers=a.map(num=>num*2);
    console.log(a);
    console.log(numbers);
}
map();

//-------------------------------------------------------//
//event bubbling
//iife
(function(){
    console.log("Ife involed");
})();

//closure
function counter(){
    let count=0;
    return{
        increment:function(){
            count++;
            return count;
        },
        decrement:function(){
            count--;
            return count;
        },
        display:function(){
            let message= ("Current count:"+count);
            return message;
        }
    }
}
const mycounter=counter();
console.log(mycounter.increment());
console.log(mycounter.decrement());
console.log(mycounter.display());

//setTimeout and setInterval
setTimeout(()=>{
    console.log("This message is shown after 2 seconds");
},2000);

const timerId= setInterval(()=>{
    console.log("This message is after shown every 3 seconds");
},3000);

setTimeout(()=>{
    clearInterval(timerId);
},7000);
//-------------------------------------------------------//

//promises
const data={name:"ANMOL",AGE:20};
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
                resolve(data);
            
        },2000);
    });
}
fetchData().then(
    data=>{
    console.log("data:",data);}
).catch(err=>{
    console.log("Error:",err);
});

//-------------------------------------------------------//
//async await
async function fetchData(){
    try{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data=await response.json();
    console.log("Data fetched successfully",data);
    }catch(error){
        console.log("Error:",error);
    }
}