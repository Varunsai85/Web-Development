console.log("Advanced JS");
let obj={
    a:1,
    b:2,
    c:3,
    d:5,
    e:6
}
let {a,b,...rest}=obj;
console.log(a,b,rest);

//spread
let sum=(a,b,c)=>{
    return a+b+c;
}
let arr=[1,2,3,4,5]
console.log(arr.reduce((a,b)=>{
    return a+b
}));