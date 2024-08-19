console.log("Random color and background color generator")
let boxes=document.body.querySelector(".container").children
function randomcolor(){
    let red=Math.ceil(0+Math.random()*255)
    let green=Math.ceil(0+Math.random()*255)
    let blue=Math.ceil(0+Math.random()*255)
    return `rgb(${red} ${green} ${blue})`
}
Array.from(boxes).forEach((e)=>{
    e.style.backgroundColor=randomcolor()
    e.style.color=randomcolor()
})