console.log("Faulty Calculator Meth 2");
random=Math.random()
console.log(random)
let x=prompt("Enter the 1st Number")
let z=prompt("Enter the Operation")
let y=prompt("Enter the 2nd Number")

let operation={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}
if(random>0.1){
    console.log(`The resut is ${x} ${z} ${y}`)
    alert(`The result is ${eval(`${x} ${z} ${y}`)}`)
}
else{
    z=operation[z]
    alert(`The result is ${eval(`${x} ${z} ${y}`)}`)
}