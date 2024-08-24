class User {
    constructor(name) {
        this.name = name
    }
    get name() {
        return this._name
    }
    set name(value) {
        this._name = value
        return
    }
}
let a = new User("Varun")
console.log(a.name);

a.name=("Hero")
console.log(a.name);
