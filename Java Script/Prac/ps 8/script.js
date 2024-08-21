console.log("Prcatise Set 8")
//Q1
document.getElementById("masbtn1").addEventListener("click",()=>{
    alert("Hello im btn1")
})
//Q4
setInterval(()=>{
    document.querySelector(".bulb").classList.toggle("glow")
},300)