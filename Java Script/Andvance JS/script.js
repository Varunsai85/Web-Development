//IIFE - immediately Invoke Expression
async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(88)
        },1000)
    })
}
(async function main(){
    let a=await sleep()
    console.log(a);
    let b=await sleep()
    console.log(b);

    //Destructuring
    let [x,y,...root]=[1,2,3,4,5,67]
    console.log(x,y,root);

    //also in destrcturing
    const obj={
        p:1,
        q:2,
        r:3
    }
    const {p,q}=obj;
    console.log(p,q);
})()
function sum(a,b,c){
    return a+b+c;
}
//Spread
let arr=[1,2,3,5,56]
console.log("Sum is",sum(...arr));