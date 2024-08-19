console.log("Arrays")
/* let arr=[1,2,3,4,5]
console.log(arr)
let str=arr.toString()
console.log(str)
console.log(arr.join(""))
arr.pop()//Modifies the array
console.log(arr)
arr.push(22)//Modifies the array
console.log(arr)
arr.shift()//Modifies the array
console.log(arr)
arr.unshift("Varun")//Modifies the array
console.log(arr)
delete arr[1]//Modifies the array
console.log(arr)
console.log(typeof arr[1])
arr[1]=5//Modifies the array
console.log(arr)

let arr2=[7,3,9,1,5,0]
console.log(arr2.sort())//Modifies the array

arr2.splice(1,2,33,55)//Modifies the array
console.log(arr2)


console.log(arr2.slice(2))

arr2.reverse()//Modifies the array
console.log(arr2)*/

//Looping through arrays
let arr = [5, 3, 9, 4, 7]
arr.forEach((value, index, array) => {
    console.log(value)
})
const square = arr.map((value, index, array) => {//Does not modify the original array
    return value ** 2
})
var arr2=square
console.log(arr2)
console.log(arr)

arr2=arr.filter(greater_than_3=(e)=>{
    if(e>3){
        return true
    }
    return false
})
console.log(arr2)

arr2=arr.reduce(redu=(a,b)=>{
    return a*b;
})
console.log(arr2)

arrv=Array.from("Varun")
console.log(arrv)

obj={
    a:1,
    b:2,
    c:3
}
for(const key in obj){
    if(Object.hasOwnProperty.call(obj,key)){
        const element=obj[key]
        console.log(key,element)
    }
}

for(const key of arr){
    console.log(key)
}