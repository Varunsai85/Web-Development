console.log("Faulty Calculator")

let random = Math.random()
console.log(random)
let x = prompt("Enter 1st Number")
let z = prompt("Enter the Operation")
let y = prompt("Enter 2nd Number")


if (random < 0.1) {
    if (z == "+") {
        result= x - y
    } else if (z == "*") {
        result= x + y;
    } else if (z == "-") {
        result= x / y;
    } else {
        result= x ** y;
    }
} else {
    if (z == "+") {
        result= x + y
    } else if (z == "*") {
        result= x * y;
    } else if (z == "-") {
        result= x - y;
    } else if (z == "/") {
        result= x / y;
    } else {
        result= x ** y
    }
}
alert("The result is "+result)
