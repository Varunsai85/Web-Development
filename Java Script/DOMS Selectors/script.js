console.log("Doms Selectors")
let a=document.getElementsByClassName("box")
console.log(a)
a[3].style.backgroundColor="red"
document.getElementById("bluebox").style.backgroundColor="blue"
document.getElementById("bluebox").style.color="white"

document.querySelector(".box").style.backgroundColor="green"
console.log(document.querySelectorAll(".box"))
// for(let i=0;i<document.querySelectorAll(".box")length;i++){
//     console.log(document.querySelectorAll(".box")[i])
// }

//By using for each loop
document.querySelectorAll(".box").forEach((e)=>{
    console.log(e)
    e.style.backgroundColor="red";
    e.style.border="1px solid black";
})

console.log(document.getElementsByTagName("div"))
console.log(document.getElementsByName("x"))

