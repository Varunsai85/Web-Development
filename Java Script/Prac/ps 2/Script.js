console.log("Practise Set 2")
//Q1
let age=18;
if(age>10 && age<20){
    console.log(true)
}
else{
    console.log(false)
}
//Q2
switch(age){
    case 1:
        console.log("age is 1");
        break;
    case 2:
        console.log("age is 2");
        break;
    case 18:
        console.log("age is 18");
        break;
    default:
        console.log("Enter your corect age");
        break;
}

//Q3
{
    let num=23;
    if(num%2==0 && num%3==0){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
    
//Q4
let num=22;
if(num%2==0 || num%3==0){
    console.log(true)
}
else{
    console.log(false)
}
//Q5
{
    let age=20;
    let res=(age>18)?"You can drive":"You cannot drive";
    console.log(res)
}