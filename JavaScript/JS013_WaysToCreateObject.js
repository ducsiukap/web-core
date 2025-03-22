// using {}
function createUser(name, age) {
    return  /*using object literal {} */{
        name,
        age,
        sayHi() { console.log(`Hi there, i am ${name}`); }
    }
}
let user1 = createUser("vduczz", 20);
user1.sayHi();
console.log("-------------------");


// using function constructor
function Cat(name, color) {
    this.name = name;
    this.color = color;
    this.sayHi = () => { console.log(`meow meow, my name is ${this.name}`); }
}
const Kin = new Cat("Kin", "white");
Kin.sayHi();
console.log("-------------------");


// using Object
const Bully = new Object();
Bully.name = "Bully";
Bully.eyeColor = "Brown";
Bully.sayHi = () => { console.log(`gau gau, my name is ${Bully.name}`); }
Bully.sayHi();
// or
const Dog = {
    sayHi: function() { console.log(`bark bark, my name is ${this.name}`); }
}
Bully2 = Object.create(Dog);
Bully2.name = "Bully2";
Bully2.sayHi();
console.log("-------------------");


// Class Syntax
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() { console.log(`Hi there, i am ${this.name}`); }
}
const user2 = new User("nddat", 21);
user2.sayHi();
console.log("-------------------");