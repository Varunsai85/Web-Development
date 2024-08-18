console.log("Practise Set 3")
//Q1
let marks={
    harry:98,
    rohan:70,
    aakash:7
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]]);
}

//Q2
for(const key in marks){
    const element=marks[key];
    console.log(key,element);
}
// //Q3
// let num=6;
// let i;
// while(i!=num){
//     i = prompt("Enter the number : ")
// }

//Q4
function mean_func(a,b,c,d,e){
    return (a+b+c+d+e)/5;
}
mean=mean_func(2,6,8,4,3)
console.log("The mean of the 5 numbers is "+mean)