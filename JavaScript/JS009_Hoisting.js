// In JS, the declaration of a variable, function or class 
// is hoisted to the top of the scope during the compilation phase.

// ‘var’ variables are hoisted with undefined, we can access them before the declaration.
console.log(a); // undefined
var a = 10;
// ‘let’ and ‘const’ are hoisted but remain in the Temporal Dead Zone until initialized
// we cant access them before the declaration.
// console.log(b, c); // Error
let b = 10;
const c = 20;


// with function, we can access them before the declaration.
hiUser({name: "vduczz"});
function hiUser() {
    console.log(`Hello ${this.name}`);
}
// but, if a function is assigned to a variable, we can't access it before the declaration.
// add(10, 20); // error
// max(3, 5); // error
var add = (x, y) => x + y;
const max = function(a, b) { return a > b ? a : b;}


// A class cannot be accessed before the declaration.
// const user = new User("vduczz", 21); // error
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


//  Accessing Variables Declared Later in Loops
console.log("--------------");
for (var i = 1; i < 10; ++i) setTimeout(() => console.log(i), 100); 
console.log("--------------"); 
for (let i = 1; i < 10; ++i) setTimeout(() => console.log(i), 100);