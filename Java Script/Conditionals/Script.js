console.log("Conditionals") 

let age=3;
grace=2 ;
console.log("Your age is "+(age+grace))
console.log("Your age is "+(age-grace))
console.log("Your age is "+(age*grace))
console.log("Your age is "+(age/grace))
console.log("Your age is "+(age**grace))
if(age+grace>18){
    console.log("You can drive");
}
if (age == 18) {
    console.log("You can drive");
}

else if (age == 0) {
    console.log("Are you kidding?")
}

else if (age == 1) {
    console.log("Are you again kidding?")
}

else {
    console.log("You cannot drive");
}


a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);
console.log(c)