console.log("Factorial of a number")
let a=prompt("Enter your number")
function factorial(num){
    if(num==0 || num==1){
        return 1
    }else{
        num=num*factorial(num-1)
    }
    return num
}
console.log("The factorial of the given number is",factorial(a))