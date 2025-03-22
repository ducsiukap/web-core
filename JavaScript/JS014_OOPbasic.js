// syntax to declare a class
class User /* className */ {
    // attributes
    name; age;

    // constructor
    constructor(name="default", age=0) { 
        this.name = name;
        this.age = age;
    }

    // method
    sayHi() { console.log(`Hi there. My name is ${this.name} and i am ${this.age} yos!`); }
    static add(a, b) { return a + b;} // static method: can be called without instance of class
}

//  create an instance of class
const user1 = new User(); // call default constructor, name=default, age=0
user1.sayHi();
console.log("-------------------");

const user2 = new User("vduczz", 20);
user2.sayHi();
console.log("-------------------");

// call static method:
console.log(User.add(2, 3));


// instanceof
let a = 20;
console.log(user1 instanceof User, a instanceof User); // true, false
