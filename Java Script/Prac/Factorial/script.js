console.log("Factorial of a number")
// let a=prompt("Enter your number")
// function factorial(num){
//     if(num==0 || num==1){
//         return 1
//     }else{
//         num=num*factorial(num-1)
//     }
//     return num
// }
// console.log("The factorial of the given number is",factorial(a))
// The Above method is also correct
let a = 5
function factorial(number) {
    if (number == 0) {
        console.log(1)
    } else {
        let arr = Array.from(Array(number + 1).keys())
        arr.shift()
        console.log(arr.reduce((a, b) => {
            return a * b;
        }))
    }
}
factorial(a)
