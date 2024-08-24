class Animal{
    constructor(name){
        this.name=name
        console.log("Object is Created");
    }
    eat(){
        console.log("Im eating");
    }
    jump(){
        console.log("I'm Jumping");
    }
}
class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("Lion Object is Created");
    }
    eat(){
        super.eat()
        console.log("Im eating roar");
    }
}

//let a=new Animal("Rabbit")
let l=new Lion("Simba")
