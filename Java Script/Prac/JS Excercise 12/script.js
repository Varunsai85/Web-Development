console.log("Random color and background color generator")
let e=document.body.firstElementChild.children
console.log(e[0])
let a=Math.random()
console.log(a)
if(a<0.35){
    e[0].style.backgroundColor="Yellow";
    e[0].style.color="red"
    e[1].style.backgroundColor="blue"
    e[1].style.color="white"
    e[2].style.backgroundColor="green"
    e[2].style.color="orange"
    e[3].style.backgroundColor="purple"
    e[3].style.color="cyan"
    e[4].style.backgroundColor="gray"
    e[4].style.color="black"
}
else if(a>0.35 && a<0.65){
    e[2].style.backgroundColor="Yellow"
    e[2].style.color="red"
    e[3].style.backgroundColor="blue"
    e[3].style.color="white"
    e[4].style.backgroundColor="green"
    e[4].style.color="orange"
    e[0].style.backgroundColor="purple"
    e[0].style.color="cyan"
    e[1].style.backgroundColor="gray"
    e[1].style.color="black"
}
else{
    e[3].style.backgroundColor="Yellow"
    e[3].style.color="red"
    e[4].style.backgroundColor="blue"
    e[4].style.color="white"
    e[0].style.backgroundColor="green"
    e[0].style.color="orange"
    e[1].style.backgroundColor="purple"
    e[1].style.color="cyan"
    e[2].style.backgroundColor="gray"
    e[2].style.color="black"
}