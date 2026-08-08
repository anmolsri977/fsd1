let promise=new Promise((res,rej)=>{
    let a=5,b=6;
    let c=a+b;
    if(c==4){
        res("Success");
    }else{
        rej("Error");
    }
});


promise.then((n)=>{
    console.log(n);
    
}).catch((err)=>{
    console.log(err);
});
