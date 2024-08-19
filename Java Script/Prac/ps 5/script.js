console.log("Practise Set 5")
//Q1 and Q2
// arr1=[1,2,3,4]
// // let a=prompt("Enter the Number");
// // let a=5;
// for(let i=0;i<4;i++){
//     let a=prompt("Enter your Number")
//     a=Number.parseInt(a)
//     arr1.push(a)
//     if(a==0)break;
// }
// console.log(arr1)

//Q3
let arr3=[10,30,66,34,40,70,55,89,3]
arr3=arr3.filter(divisibleby_10=(e)=>{
    if(e%10==0)
        return true;
    return false
})
console.log(arr3)

//Q4
arr3=arr3.map(value=>{
    return value**2
})
console.log(arr3)

//Q5
arr3=arr3.reduce((a,b)=>{
    return a*b;
})
console.log(arr3)