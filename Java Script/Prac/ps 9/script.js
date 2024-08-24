console.log("Practise Set 9");
//Q1
const scriptLoader=(src)=>{
    const script=document.createElement("script")
    script.src=src
    document.head.append(script)
    script.onload=resolve("The Load is Complete")
    return script
}
let prom1=new Promise((resolve,reject)=>{

})
prom1.then(e=>{
    alert(e);
})
